import React from 'react';
import { Page, Header, Text, Button, useNavigate, Box } from 'zmp-ui';
import { useRecoilState } from 'recoil';
import { userState } from '../state';

const HomePage: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const [user] = useRecoilState(userState);

  return (
    <Page className="page">
      <Header title="Trang chủ" />
      <Box p={4} className="section-container">
        <div className="flex flex-col items-center mb-4">
            <img src={user.avatar} className="w-20 h-20 rounded-full mb-2 border-2 border-primary" />
            <Text.Title size="large">Xin chào, {user.name}!</Text.Title>
        </div>
        <Text className="mb-4 text-center text-gray-500">
            Chào mừng bạn đến với Zalo Mini App được tạo bởi AI.
        </Text>
        <Button fullWidth onClick={() => navigate('/about')}>
          Xem giới thiệu
        </Button>
      </Box>
    </Page>
  );
}

export default HomePage;