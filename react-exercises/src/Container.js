
export const Container = ({children,title}) =>{
  return <div className="container-style">
    <p>Title: {title}</p>
    {children}
  </div>
}