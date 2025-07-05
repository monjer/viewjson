import Content from './content';
import { Metadata } from 'next';

export default function Page() {
  return <Content />;
}

export const metadata: Metadata = {
  title: 'viewjson - Convert JSON to XML',
  description: 'Convert JSON string to XML and vice versa.',
  keywords: 'JSON, XML, converter, online tool',
};