import React from "react";

interface PostBodyProps {
  content: string;
}

export default function PostBody({ content }: PostBodyProps) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          {/* 
            In a real implementation, you would use a Markdown component like react-markdown 
            For now, we'll simulate parsed markdown with basic HTML
          */}
          <div
            dangerouslySetInnerHTML={{ __html: formatMarkdownToHTML(content) }}
          />
        </div>

        <div className="mt-16 border-t border-gray-200 pt-8">
          <div className="flex items-center">
            <h3 className="text-lg font-medium text-gray-900">
              Share this article:
            </h3>
            <div className="ml-4 flex space-x-4">
              <button className="text-gray-500 hover:text-primary">
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.719 0-4.924 2.205-4.924 4.924 0 .386.044.762.127 1.122-4.092-.205-7.72-2.166-10.149-5.145-.424.727-.666 1.573-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.247-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.497 14-13.986 0-.21 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                </svg>
              </button>
              <button className="text-gray-500 hover:text-primary">
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </button>
              <button className="text-gray-500 hover:text-primary">
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </button>
              <button className="text-gray-500 hover:text-primary">
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Simple function to convert markdown to HTML (a very simplified version)
function formatMarkdownToHTML(markdown: string): string {
  const html = markdown
    .replace(
      /# (.*?)(\n|$)/g,
      '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>',
    )
    .replace(
      /## (.*?)(\n|$)/g,
      '<h2 class="text-2xl font-bold mt-6 mb-3">$1</h2>',
    )
    .replace(
      /### (.*?)(\n|$)/g,
      '<h3 class="text-xl font-bold mt-5 mb-2">$1</h3>',
    )
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/\n\n/g, '</p><p class="mb-4">')
    // Handle lists
    .replace(/\n- (.*?)(?=\n- |\n\n|$)/g, '<li class="ml-6 list-disc">$1</li>')
    // Wrap paragraphs
    .replace(/((?!<h1|<h2|<h3|<li|<\/li>).+)(\n|$)/g, '<p class="mb-4">$1</p>')
    // Clean up
    .replace(/<\/p><p class="mb-4"><li/g, "<li")
    .replace(/<\/li><\/p><p class="mb-4">/g, "</li>")
    // Wrap lists
    .replace(/(<li.*?>)/g, '<ul class="mb-6 list-disc">$1')
    .replace(/(<\/li>)(?!.*<li)/g, "$1</ul>");

  return html;
}
