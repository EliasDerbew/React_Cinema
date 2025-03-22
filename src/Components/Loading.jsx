import { SyncLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="loading__error">
      <SyncLoader color="blue" size={15} />
      <p>Loading to find the Movies . . .</p>
    </div>
  );
}
