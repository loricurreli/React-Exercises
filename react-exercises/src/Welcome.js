
export const Welcome = ({name}) =>{
  return (
    <div>
        {name ? `Welcome, ${name}` : "Welcome, user"}
    </div>
  )
}