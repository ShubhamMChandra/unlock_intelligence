import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownContentProps {
  content: string;
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => (
          <h1 className="mb-4 text-xl font-semibold tracking-tight text-[#1a1a2e]">{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className="mb-3 mt-8 border-b border-black/[0.06] pb-2 text-lg font-medium text-[#1a1a2e] first:mt-0">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="mb-2 mt-6 text-base font-medium text-[#1a1a2e]">{children}</h3>
        ),
        h4: ({ children }) => (
          <h4 className="mb-1.5 mt-4 text-sm font-medium text-[#1a1a2e]">{children}</h4>
        ),
        p: ({ children }) => (
          <p className="mb-3 text-sm leading-relaxed text-[#6b7280]">{children}</p>
        ),
        ul: ({ children }) => (
          <ul className="mb-3 ml-4 list-disc space-y-1.5 text-sm text-[#6b7280]">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="mb-3 ml-4 list-decimal space-y-1.5 text-sm text-[#6b7280]">{children}</ol>
        ),
        li: ({ children }) => (
          <li className="leading-relaxed">{children}</li>
        ),
        a: ({ href, children }) => (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 underline underline-offset-2 transition-colors hover:text-[#1a1a2e]"
          >
            {children}
          </a>
        ),
        blockquote: ({ children }) => (
          <blockquote className="mb-3 border-l-2 border-[var(--amber)]/40 pl-4 text-sm italic text-[#9ca3af]">
            {children}
          </blockquote>
        ),
        code: ({ children, className }) => {
          const isBlock = className?.includes("language-");
          if (isBlock) {
            return (
              <code className="block overflow-x-auto rounded-lg bg-[#f8f8fa] p-4 font-mono text-xs text-[#1a1a2e]">
                {children}
              </code>
            );
          }
          return (
            <code className="rounded bg-[#f8f8fa] px-1.5 py-0.5 font-mono text-xs text-[#1a1a2e]">
              {children}
            </code>
          );
        },
        pre: ({ children }) => (
          <pre className="mb-3 overflow-x-auto rounded-lg border border-black/[0.06] bg-[#f8f8fa]">
            {children}
          </pre>
        ),
        table: ({ children }) => (
          <div className="mb-3 overflow-x-auto rounded-lg border border-black/[0.06]">
            <table className="w-full text-sm">{children}</table>
          </div>
        ),
        thead: ({ children }) => (
          <thead className="bg-[#f8f8fa] text-left text-[#6b7280]">{children}</thead>
        ),
        th: ({ children }) => (
          <th className="px-3 py-2 text-xs font-medium">{children}</th>
        ),
        td: ({ children }) => (
          <td className="border-t border-black/[0.04] px-3 py-2 text-[#6b7280]">{children}</td>
        ),
        hr: () => (
          <hr className="my-6 border-black/[0.06]" />
        ),
        strong: ({ children }) => (
          <strong className="font-semibold text-[#1a1a2e]">{children}</strong>
        ),
        input: ({ checked, ...props }) => (
          <input
            type="checkbox"
            checked={checked}
            readOnly
            className="mr-2 accent-[var(--sage)]"
            {...props}
          />
        ),
      }}
    />
  );
}
