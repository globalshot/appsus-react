interface SidebarProps {
    onCategoryClick: (category: string) => void;
  }

export function MailSidebar({ onCategoryClick }: SidebarProps) {
    function handleClick(category: string) {
        onCategoryClick(category); // Invoke the callback function in the parent component
      }
    return (
        <div>
            <div>
                <button onClick={() => handleClick('')}>Inbox</button>
            </div>
            <div>
                <button onClick={() => handleClick('star')}>Star</button>
            </div>
            {/* <div>
                important
            </div> */}
        </div>
    )
}