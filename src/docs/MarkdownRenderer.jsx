"use client";

import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MarkdownRenderer({ content, src }) {
  const [markdownContent, setMarkdownContent] = useState(content || "");
  const [isLoading, setIsLoading] = useState(!!src);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (src) {
      setIsLoading(true);
      setError(null);

      // Fetch the markdown file
      fetch(src)
        .then((res) => {
          if (!res.ok) throw new Error(`Failed to load: ${src}`);
          return res.text();
        })
        .then((data) => {
          setMarkdownContent(data);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    }
  }, [src]);

  if (isLoading) {
    return <div className="text-zinc-500">Loading documentation...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <article className="prose prose-zinc dark:prose-invert max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {markdownContent}
      </ReactMarkdown>
    </article>
  );
}
