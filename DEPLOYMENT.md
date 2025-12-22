# Guia de Deploy - BC Refrigeração

Este guia explica como fazer o deploy do site em diferentes plataformas de hospedagem.

## Arquivos de Configuração Incluídos

O projeto já inclui arquivos de configuração para as principais plataformas:

- **vercel.json** - Para deploy na Vercel
- **netlify.toml** - Para deploy na Netlify
- **public/_redirects** - Alternativa para Netlify (já incluído)
- **public/.htaccess** - Para servidores Apache

## Deploy na Vercel

### Opção 1: Via CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Opção 2: Via Dashboard
1. Acesse https://vercel.com
2. Conecte seu repositório Git
3. Configure as seguintes variáveis:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy automático

**Importante:** O arquivo `vercel.json` já está configurado para redirecionar todas as rotas para o `index.html`.

## Deploy na Netlify

### Opção 1: Via CLI
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

### Opção 2: Via Dashboard
1. Acesse https://netlify.com
2. Conecte seu repositório Git ou faça upload manual da pasta `dist`
3. Configure as seguintes variáveis:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
4. Deploy automático

**Importante:** Os arquivos `netlify.toml` e `public/_redirects` já estão configurados para redirecionar todas as rotas.

## Deploy em Servidor Apache

### Requisitos
- PHP 7.4+ ou servidor web Apache
- Acesso SSH ou FTP ao servidor

### Passos:
1. Execute o build localmente:
```bash
npm run build
```

2. Faça upload do conteúdo da pasta `dist` para o servidor

3. Certifique-se de que o arquivo `.htaccess` está presente na raiz (já incluído em `public/.htaccess`)

4. Verifique se o módulo `mod_rewrite` está habilitado no Apache:
```bash
a2enmod rewrite
systemctl restart apache2
```

5. Configure o VirtualHost (se necessário):
```apache
<Directory /var/www/html>
    AllowOverride All
    Require all granted
</Directory>
```

## Deploy em Outros Servidores (Nginx, etc.)

Para outros servidores, você precisará configurar manualmente o redirecionamento de rotas.

### Exemplo de configuração Nginx:
```nginx
server {
    listen 80;
    server_name bcrefrigeracaosc.com.br;
    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## Verificando o Deploy

Após o deploy, teste as seguintes URLs para garantir que o roteamento funciona:

- **Home:** https://bcrefrigeracaosc.com.br/
- **Cidade (Penha):** https://bcrefrigeracaosc.com.br/penha
- **Cidade (Balneário Camboriú):** https://bcrefrigeracaosc.com.br/balneario-camboriu
- **Bairro:** https://bcrefrigeracaosc.com.br/bairro/centro-penha
- **404:** https://bcrefrigeracaosc.com.br/pagina-inexistente

Todas essas rotas devem funcionar corretamente, inclusive ao:
- Acessar diretamente pela URL
- Recarregar a página (F5)
- Usar botões voltar/avançar do navegador

## Estrutura de Rotas

O site possui as seguintes rotas:

### Página Principal
- `/` - Home com listagem das cidades atendidas

### Páginas de Cidades
- `/penha` - Página de Penha com todos os bairros
- `/balneario-camboriu` - Página de Balneário Camboriú com todos os bairros

### Páginas de Bairros (Penha)
- `/bairro/centro-penha`
- `/bairro/armacao-penha`
- `/bairro/praia-alegre-penha`
- `/bairro/nossa-senhora-fatima-penha`
- `/bairro/santa-lidia-penha`
- `/bairro/sao-nicolau-penha`
- `/bairro/gravata-penha`

### Páginas de Bairros (Balneário Camboriú)
- `/bairro/centro-balneario-camboriu`
- `/bairro/pioneiros-balneario-camboriu`
- `/bairro/nacoes-balneario-camboriu`
- `/bairro/estados-balneario-camboriu`
- `/bairro/praia-dos-amores-balneario-camboriu`
- `/bairro/barra-norte-balneario-camboriu`
- `/bairro/barra-sul-balneario-camboriu`

### Página 404
- Qualquer rota não encontrada redireciona para página 404 personalizada

## SEO e Schema Markup

Todas as páginas incluem:
- Meta tags otimizadas
- Schema.org markup (JSON-LD)
- Open Graph tags
- Twitter Cards
- Canonical URLs
- Geolocalização (meta tags geo)
- Sitemap.xml (já incluído em `public/sitemap.xml`)
- robots.txt (já incluído em `public/robots.txt`)

## Troubleshooting

### Problema: Erro 404 em rotas internas
**Solução:** Verifique se o arquivo de configuração correto está presente e ativo para sua plataforma.

### Problema: Build falha com erro de peer dependencies
**Solução:** Execute `npm install --legacy-peer-deps` antes do build.

### Problema: Imagens não aparecem
**Solução:** Certifique-se de que todas as imagens da pasta `public` foram copiadas para o `dist` durante o build.

## Suporte

Para questões técnicas, consulte a documentação das respectivas plataformas:
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [Vite Docs](https://vitejs.dev)
