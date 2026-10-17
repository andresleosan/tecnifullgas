import { getSeoMetadata } from '../seo';

interface SeoSchemaProps {
  pathname?: string;
}

export default function SeoSchema({ pathname = '/' }: SeoSchemaProps) {
  const { schema } = getSeoMetadata(pathname);
  const json = JSON.stringify(schema).replace(/</g, '\\u003c');

  return (
    <script
      type="application/ld+json"
      data-seo-schema="page"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
