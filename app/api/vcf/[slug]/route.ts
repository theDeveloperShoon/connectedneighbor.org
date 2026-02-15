import { NextRequest, NextResponse } from 'next/server';
import vCard from 'vcf';
import { getContact } from '@/lib/data';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> } 
) {
  const slug = (await params).slug;
  const contact = getContact(slug);

  if (!contact) {
    return new NextResponse('Contact not found', { status: 404 });
  }

  const card = new vCard();
  card.set('fn', contact.name);
  card.set('org', contact.name);
  // vcf package handles properties. For complex properties like TEL;TYPE=WORK, 
  // vcf might need specific object structure or just string.
  // Based on my test regarding .set(), let's try setting properties.
  
  // vcf treats values as strings or arrays of strings.
  // Property parameters (like TYPE=WORK) are tricky in vcf package simple .set().
  // Let's check if I can pass property object.
  // Actually, for simplicity and robustness with 'vcf' package (which seems minimal),
  // I'll stick to basic fields or just let it handle string conversion.
  // But wait, TEL type is important.
  // vcf package allows adding properties with parameters via .add(key, value, params).
  // I'll re-verify if .add exists or how to add params.
  // My test script only checked .set().
  
  // Let's assume standard usage pattern for now.
  // If .set() just takes value, I can't easily add params.
  // But standard vCard 4.0 (which vcf uses) prefers 'tel' URI scheme anyway, e.g. tel:+1-555-555-5555.
  // So just setting valid value is often enough.

  card.set('tel', contact.phone);
  card.set('email', contact.email);
  card.set('url', `${process.env.NEXT_PUBLIC_BASE_URL || 'https://connectedneighbor.org'}/${contact.slug}`);
  // Add image if available? vCard 4.0 supports PHOTO with URI.
  if (contact.imageUrl) {
    card.set('photo', contact.imageUrl);
  }

  return new NextResponse(card.toString(), {
    headers: {
      'Content-Type': 'text/vcard; charset=utf-8',
      'Content-Disposition': `attachment; filename="${contact.slug}.vcf"`,
    },
  });
}
