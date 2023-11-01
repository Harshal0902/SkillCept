type Player = "X" | "O" | "BOTH" | null;

export default function Square({ value, onClick, winner }: { winner: Player; value: Player; onClick: () => void; }) {
    if (!value) {
        return (
            <button className="w-24 h-24 text-6xl text-white border-2 border-white" onClick={onClick} disabled={Boolean(winner)} />
        );
    }
    return (
        <button className={`w-24 h-24 text-6xl text-white border-2 border-white square_${value.toLocaleLowerCase()}`} disabled>
            {value}
        </button>
    );
}
