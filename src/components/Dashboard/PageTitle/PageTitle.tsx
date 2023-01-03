import { Title } from '@mantine/core';

interface PageTitleProps {
  pageTitle: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ pageTitle }) => {
  return (
    <Title
      order={2}
      fw={600}
      variant="gradient"
      gradient={{ from: '#ff8a00', to: '#da1b60', deg: 45 }}
    >
      {pageTitle}
    </Title>
  );
};

export default PageTitle;
