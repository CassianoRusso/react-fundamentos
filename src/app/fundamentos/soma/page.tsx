export default function Page(){
    const nome = 'Cassiano'
    const idade = 25

    return (
        <div>
            <div>{nome} {idade}</div>
            <div>{2 + 7}</div>
            <div>{idade * 3}</div>
            <div>{Math.random()}</div>
        </div>
    )
}