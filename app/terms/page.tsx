import Article from "@/components/Article";

export default function Page() {
  return (
    <div className="gt-4 max-w-[1024px] m-auto mt-10">
      <Article>
        <h1 className="mt-4">Terms of Service</h1>
        <p><strong>Effective Date:</strong> July 19, 2025</p>

        <p>Welcome to <strong>viewjson.online</strong>. By accessing or using this website (the "Service"), you agree to be bound by the following Terms of Service.</p>

        <h3>1. Description of Service</h3>
        <p>viewjson.online provides users with free online tools to format, validate, minify, convert to other formats, and perform other operations on JSON data. The service is offered "as-is" and "as-available" without any warranties.</p>

        <h3>2. User Responsibilities</h3>
        <p>By using this site, you agree to:</p>
        <ul>
          <li>Use the service only for lawful purposes;</li>
          <li>Not misuse or interfere with the site's functionality or infrastructure;</li>
          <li>Not upload content that is illegal, contains personal information, or infringes any third-party rights.</li>
        </ul>

        <h3>3. Privacy</h3>
        <p>We respect your privacy. viewjson.online does not store or retain any JSON data you submit through our tools. Please refer to our <a href="/privacy">Privacy Policy</a> for more details.</p>

        <h3>4. Intellectual Property</h3>
        <p>All tools, design, and content on this website are the intellectual property of viewjson.online, unless otherwise stated. You may not reproduce or distribute content from this website without permission.</p>

        <h3>5. Third-Party Services and Ads</h3>
        <p>This site may contain links to third-party websites or display advertisements. We are not responsible for the content or practices of those external sites or services.</p>

        <h3>6. Disclaimer of Warranty</h3>
        <p>The service is provided "as is" without warranties of any kind, either express or implied. We do not guarantee uninterrupted or error-free operation.</p>

        <h3>7. Limitation of Liability</h3>
        <p>To the fullest extent permitted by law, viewjson.online shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of the service.</p>

        <h3>8. Changes to Terms</h3>
        <p>We reserve the right to update or modify these Terms of Service at any time. Any changes will be posted on this page. Continued use of the service indicates acceptance of the updated terms.</p>

        <h3>9. Contact Us</h3>
        <p>If you have any questions regarding these Terms, please contact us at: <a href="https://github.com/monjer/viewjson/issues">Github Page</a></p>
      </Article>
    </div>
  );
}