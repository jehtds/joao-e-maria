# João & Maria - Hamburgueria Landing Page

Uma landing page moderna e responsiva para a hamburgueria João & Maria, seguindo o design profissional fornecido.

## 📁 Estrutura do Projeto

```
joaoemaria/
├── index.html          # Página principal
├── style.css           # Estilos da página
├── imagens/            # Pasta com as imagens
│   ├── burger-principal.png
│   ├── burger-chapa.png
│   ├── burger-1.png
│   ├── burger-2.png
│   ├── burger-3.png
│   ├── burger-4.png
│   ├── burger-5.png
│   ├── burger-6.png
│   └── mapa.png
└── README.md           # Este arquivo
```

## 🖼️ Imagens Necessárias

Coloque as seguintes imagens na pasta `imagens/`:

1. **burger-principal.png** - Burger grande para a seção hero (lado direito)
2. **burger-chapa.png** - Imagem do burger na chapa (seção "Quem Somos")
3. **burger-1.png até burger-6.png** - Imagens para a galeria
4. **mapa.png** - Screenshot do mapa da localização

## 🚀 Como Usar

1. Abra o arquivo `index.html` no seu navegador
2. A página é totalmente responsiva e funciona em dispositivos móveis
3. Os botões do WhatsApp e Instagram podem ser atualizados no HTML (linhas com `href="#"`)

## 🎨 Personalizações

### Alterar Informações de Contato

No arquivo `index.html`, busque por:
- **Endereço**: Seção "ONDE ESTAMOS" (linha ~160)
- **Horário**: Seção "ONDE ESTAMOS"
- **Telefone**: Seção "ONDE ESTAMOS"
- **Links do WhatsApp**: Procure por `href="#"` nos botões WhatsApp
- **Links do Instagram**: Procure por `href="#"` nos botões Instagram

### Cores Principais

As cores estão definidas em `style.css`:
- Cor Primária (Vermelho): `#c41e3a`
- Fundo Escuro: `#1a1a1a`
- Texto Claro: `#ffffff`
- Aceito Gold: `#d4af37`

### Adicionar Links

Para ativar os botões, adicione as URLs no HTML:

```html
<!-- WhatsApp -->
<a href="https://wa.me/55XXXXXXXXXXXX?text=Olá%20João%20e%20Maria" class="btn btn-primary">
    <i class="fab fa-whatsapp"></i> Pedir no WhatsApp
</a>

<!-- Instagram -->
<a href="https://instagram.com/seu_instagram" class="btn btn-secondary">
    <i class="fab fa-instagram"></i> Ver Instagram
</a>
```

## 📱 Responsividade

A página é otimizada para:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## ✨ Características

✅ Design moderno e profissional
✅ Totalmente responsivo
✅ Tema escuro (dark mode)
✅ Animações suaves
✅ Ícones do Font Awesome
✅ Organização clara em seções
✅ SEO-friendly

## 📝 Seções

1. **Hero** - Apresentação principal com burguer
2. **Quem Somos** - Descrição da marca e diferenciais
3. **Missão, Visão & Valores** - Cards informativos
4. **Galeria** - Grid de fotos dos burguers
5. **Call-to-Action** - Seção de pedidos
6. **Onde Estamos** - Localização e contatos
7. **Footer** - Links sociais

## 🔧 Tecnologias Usadas

- HTML5
- CSS3 (Grid, Flexbox, Media Queries)
- Font Awesome Icons (CDN)

## 📞 Próximos Passos

- [ ] Adicionar as imagens na pasta `imagens/`
- [ ] Atualizar links do WhatsApp e Instagram
- [ ] Atualizar endereço, horário e telefone
- [ ] Testar em diferentes dispositivos
- [ ] Deployer online (Vercel, Netlify, etc)

---

Desenvolvido com ❤️ para João & Maria Hamburgueria
