import { Button } from '@monorepo/components';
import { useStore } from '@monorepo/global';

function App() {
    const bears = useStore((state) => state.bears);
    return (
        <div>
            {JSON.stringify(bears)}
            <Button />
        </div>
    );
}

export default App;
