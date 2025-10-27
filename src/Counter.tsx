export default function Counter(){
  const [count, setcount] = useState(295);
  function handleClick() {
    setcount(count - 5);
  }
return (
  <button onClick={handleClick}> Take 5 away from this number</button>
);
}