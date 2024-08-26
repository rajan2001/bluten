interface Props {
  size?: number | string;
  color?: string;
  opacity?: string;
}

export const DarkLogo = ({ size, color, opacity }: Props) => {
  return (
    <svg
      width={size ?? '10'}
      height={size ?? '16'}
      viewBox="0 0 10 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 10C0 4.47715 4.47715 0 10 0V6C10 11.5228 5.52285 16 0 16V10Z"
        fill={color ?? '#28E3E9'}
        fillOpacity={opacity ?? '1'}
      />
    </svg>
  );
};
