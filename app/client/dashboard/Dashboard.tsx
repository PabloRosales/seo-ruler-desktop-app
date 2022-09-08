import { PageHeader } from '../common/components/PageHeader';
import { Card } from '../common/components/Card';
import { CardTitle } from '../common/components/CardTitle';

export const Dashboard = () => {
  return (
    <div>
      <PageHeader title="Dashboard" icon="fas fa-home" />
      <div className="grid grid-cols-3 gap-3 xl:gap-4 mt-5">
        <Card>
          <CardTitle>Keywords</CardTitle>
          <ul className="pl-8 list-disc select-none">
            <li>Discover</li>
            <li>Collect</li>
            <li>Track</li>
          </ul>
        </Card>
        <Card>
          <CardTitle>SERP</CardTitle>
          <ul className="pl-8 list-disc select-none">
            <li>Find competitors</li>
            <li>Find opportunities</li>
            <li>Compare</li>
          </ul>
        </Card>
        <Card>
          <CardTitle>Entities</CardTitle>
          <ul className="pl-8 list-disc select-none">
            <li>Discover</li>
            <li>Collect</li>
            <li>Compare</li>
          </ul>
        </Card>
        <Card>
          <CardTitle>Content</CardTitle>
          <ul className="pl-8 list-disc select-none">
            <li>Edit Content</li>
            <li>Optimize Content</li>
            <li>Generate Content</li>
          </ul>
        </Card>
        <Card>
          <CardTitle>On Page</CardTitle>
          <ul className="pl-8 list-disc select-none">
            <li>On Page Analysis</li>
            <li>Check Entities</li>
            <li>Check Content Structure</li>
          </ul>
        </Card>
        <Card>
          <CardTitle>Utilities</CardTitle>
          <ul className="pl-8 list-disc select-none">
            <li>A set of useful utilities</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};
