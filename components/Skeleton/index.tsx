import ReactSkeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface Props {
  count?: number,
  style?: React.CSSProperties,
  className?: string
}

export default function Skeleton(props: Props) {
  const { count = 10, style = {}, className = '' } = props;
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className={`w-full ${className}`} style={style}>
        <ReactSkeleton count={count} />
      </div>
    </SkeletonTheme>
  );
}