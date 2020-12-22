import { useStore } from '@monorepo/global';
import { Button } from '@monorepo/components';

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
