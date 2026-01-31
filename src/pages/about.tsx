import React from 'react';
import { Page, Header, Box, Text, Button, useNavigate } from 'zmp-ui';

const AboutPage: React.FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <Page className="page">
      <Header title="Về chúng tôi" showBackIcon={false} />
      <Box p={4}>
        <Text.Title>Thông tin ứng dụng</Text.Title>
        <Text className="my-4">Phiên bản: 1.0.0</Text>
        <Button variant="secondary" fullWidth onClick={() => navigate(-1)}>
          Quay lại
        </Button>
      </Box>
    </Page>
  );
}

export default AboutPage;