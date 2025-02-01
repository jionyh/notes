export const sanitizeContent = (html: string) => {
  /* Regex para limpar tag vazia. O Tiptap mesmo sem nenhum conteudo cria uma tag <p></p> */
  const cleaned = html.replace(/<[^>]+>/g, "").trim();
  return cleaned.length > 0 ? html : "";
};
