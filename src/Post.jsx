// props: { author: "", content: ""}

export function Post(props) {
   return (
    <div>
        <strong>{props.author}</strong>
        <p>{props.content}</p>
    </div>
    )
}


// Named Exports: o nome do componente da função precisa ser o nome que importo do componente.