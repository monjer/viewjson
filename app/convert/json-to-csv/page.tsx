import Content from './content';
import { Metadata } from 'next';

export default function Page() {
  return <Content />;
}

export const metadata: Metadata = {
  title: 'viewjson - Convert JSON to CSV',
  description: 'Convert JSON string to CSV and vice versa.',
  keywords: 'JSON To CSV, CSV To JSON, JSON Converter, json online tool',
};