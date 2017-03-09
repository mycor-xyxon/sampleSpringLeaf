# how to tymeleaf

tymeleaf のメモ書き(document用)


## i18n(properties) の読み込み

- messages_ja.properties
```sh
index.welcome = ようこそ！
```

- index.html
```sh
<h1 th:text="#{index.welcome}"></h1>
```

## css, js, img の参照
- css
```html
 <link href="/css/sampleCss.css" th:href="@{/css/sampleCss.css}" rel="stylesheet"></link>
```

- js
```html
<script src="/js/sampleJs.js" th:src="@{/js/sampleJs.js}"></script>
```

- img
複数の属性をしているす場合はカンマ区切り。
```html
<img src="/img/sampleImg.png" th:attr="src=@{/img/sampleImg.png},title=#{logo},alt=#{logo}" />
```

> ※ spring-boot では静的ファイルの格納先がクラスパス上の「/static」「/public」「/resources」「/META-INF/resources」
に格納する事が出来る。

※ [http://qiita.com/NagaokaKenichi/items/c6d1b76090ef5ef39482](http://qiita.com/NagaokaKenichi/items/c6d1b76090ef5ef39482)