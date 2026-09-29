/** Injeta um bloco JSON-LD (schema.org). `data` pode ser um objeto único ou
 * uma lista (várias entidades na mesma página, ex.: BreadcrumbList + FAQPage). */
export function JsonLd({ data }: { data: object | object[] }) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          // JSON.stringify de conteúdo estático que controlamos — o replace
          // é só uma proteção extra contra `</script>` acidental fechando a
          // tag mais cedo.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}
