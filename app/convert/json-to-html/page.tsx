import Content from './content';
import { Metadata } from 'next';

export default function Page() {
  return <Content />;
}

export const metadata: Metadata = {
  title: 'viewjson - Convert JSON to HTML table',
  description: 'Convert JSON string to HTML table and vice versa.',
  keywords: 'JSON, HTML Table, converter, online tool',
};