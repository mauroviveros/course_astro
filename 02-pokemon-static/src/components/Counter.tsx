import { createSignal, type Component, type JSX } from "solid-js"

interface Props {
    initialValue: number
    children: JSX.Element
}
// export const Counter: Component<Props> = (props) => {
export const Counter = (props: Props) => {
    const [counter, setCounter] = createSignal(props.initialValue);

    return (
        <>

            {props.children}

            <h1 class="text-4xl">Counter</h1>
            <h3 class="text-2xl">Value: {counter()}</h3>

            <button class="bg-blue-500 p-2 mr-2 rounded" onClick={() => setCounter(prev => prev - 1)}>-1</button>
            <button class="bg-blue-500 p-2 mr-2 rounded" onClick={() => setCounter(prev => prev + 1)}>+1</button>
        </>
    )
}