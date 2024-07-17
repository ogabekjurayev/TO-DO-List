export default function MyButton({ text, func }) {
  return <button onClick={func}>{text}</button>;
}
