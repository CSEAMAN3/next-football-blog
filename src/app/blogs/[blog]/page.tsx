type BlogPageParam = {
  blog: string;
};

export default function page({ params }: { params: BlogPageParam }) {
  return (
    <div>
      <h2>{params.blog}</h2>
      <p>
        Lorem ipsum dolor sit amet, consec tetur adipisic ing elit. Soluta elig endi quisqu am odit iure, alias fuga place at
        volup tatum quo volupt as atque!
      </p>
    </div>
  );
}
