# gulp task の説明

順次更新<br />
現状watch から開始だが変更する予定

## タスクの流れ

```sh
- watch
	- build
		- build:tymeleaf
		- prop
			- prop2json
			- build:prop
		- scss
			- compile:scss
			- build:css
	- watch:tymeleaf
		- build:tymeleaf
	- watch:prop
		- prop2json
		- build:prop
	- watch:scss
		- compile:scss
		- build:css
```