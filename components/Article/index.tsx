
function CodeStyle(props) {
  return <div className={
    `prose-pre:border prose-pre:text-sm prose-pre:border-gray-500 dark:prose-pre:border-gray-700
     prose-pre:whitespace-break-spaces 
    `
  }>{props.children}</div>;
}

export default function Article({ children, className = '' }) {
  return (
    <section className={`
        prose prose-slate	
        dark:prose-invert
        prose-sm        
      prose-a:text-blue-500 prose-a:hover:text-blue-600 prose-a:no-underline prose-a:hover:underline
         max-w-[100%] 
       ${className || ''}`
    }>
      <CodeStyle>{children}</CodeStyle>
    </section>
  );
}