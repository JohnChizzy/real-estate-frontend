export interface StatsCardProps {
  title: string;
  value: string | number;
  className?: string;
  isLoading?: boolean;
  icon?: string;
  iconComponent?: React.ReactNode;
}
