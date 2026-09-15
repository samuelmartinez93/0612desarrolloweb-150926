import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">Project ready!</h1>
          <p>You may now add components and start building.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae perferendis placeat veniam voluptatum cupiditate minima quia quos minus magni, est eum vero facere dignissimos ipsum ducimus dicta laudantium consectetur nihil pariatur obcaecati eius? Dolorem, dicta sint, quibusdam sequi possimus officiis facere neque, expedita velit repellendus ad officia! Harum, omnis laborum consequuntur pariatur sapiente eum, alias velit soluta ad vel placeat eos itaque in non cumque fugit temporibus sequi praesentium voluptatibus consequatur sint deserunt perferendis enim! Sequi quam nemo aperiam corrupti nobis adipisci reprehenderit cum quibusdam, sunt libero itaque deserunt fugit illo? Autem magnam dolores sapiente reprehenderit mollitia ea officia quis!</p>
          <Button className="mt-2">Button</Button>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </div>
    </div>
  )
}
