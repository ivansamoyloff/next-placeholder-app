import HeaderLink from "./HeaderLink";

export default function HeaderNav(){
  return(
    <nav className={`headerNav`}>
      <HeaderLink
        href={'/'}
        name={`Home`} />
      <HeaderLink
        href={'/users'}
        name={`Users`} />
      <HeaderLink
        href={'/todos'}
        name={`Todos`} />
      <HeaderLink
        href={'/posts'}
        name={`Posts`} />
    </nav>
  );
}