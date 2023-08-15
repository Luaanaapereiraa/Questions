
module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/exemploQuestoes',
          destination: 'https://hardworkmedicina.com.br/exemploQuestoes.json',
        },
      ];
    },
  };
  