import { Child } from "./Child";

const Parent = () => {
    return (
        <Child color="red" onClick={() => console.log('clicked')}>
            Text
        </Child>
    );
};

export default Parent;