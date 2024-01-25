# jaelinny ♡
-  https://www.npmjs.com/package/jaelinny
```
---------------------------------------------------------------------=*+-------
---------------------------------------------------------------------=+-#+-----
------------------------------=+*#+----------------------------------+=--*+----
----------------------------+*+==+#+-------------------------------+*=---=#----
--------------------------*#+=++==+#+--------------------------=*#+-------*=---
------------------------+#+====+*++*=*=--------------------=*#*=----------**---
-----------------------**+======+*=*+-*+----------=+***=-+*+-------------++*+--
---------------------=#+*====*+==+*++--*+------+##****#*#+--------------++-#+--
--------------------=#=*+=====+*==*++--=#=---=#********#------------------+%---
--------------------*+-#=======*+=**=---=%-=*#**********-----------------=#+---
-------------------=#=-#=======++=**-----#********#*****----------------=*+----
-------------------**--*++++*####*#=-----+%********##%%#--------======-=#=-----
----+*-**----------#*+*##*+==-----==+***++#*******#*****#*+*##*******#%+-------
---=*++#=**=----=*#%*==------------------=+**+#####*****#*************#+-------
---*=-*#----=***+---=+**##-------------------=**#+#****#*#%#**********#--------
---#=---------------------+------------------------+*##**************#=--------
--+#+----------------------------------------------=*##*************#+---------
--*=*------------------------------------------------=%#********###%*=---------
-=*=--------------===----------------------------------##***#*+------=*##*=----
-=*--------+++=+----=+----------------------------------#*=---------------=++**
-=*--------=%%%*+----+-----------------------------------------------=+++**###+
--*=--=+=----=#%*---==-----------------------------------------=+##+==========+
--**=---=+=----=%+--=--------------------=+**=---------------=##+==+**+++=====#
--+#-=*+--=*----+*-=------------------------=#=-------------+#+=+**+=========+#
---#=---+*=-+=--++----------------------------*------------*#+*#=============**
---+#+++=-=*=+=--=----------------------------==----------+***+++*++========+#=
----#+---=+*=**=-------------------------------=---------=##+**++==========+%*-
----=#=-----=*=--*#+----------------====-----+%+-=##=----=##+=============*%#--
-----+*------+---+*+*=----------==------=+=+*--=#-=++*---=*=============+###=--
------**-----=+--+===--------=------------**=---+===-*=--=*+==========+#*+*----
------*%*-------++-------------=+#%%%+-==-+*---------++---*+========+#*-**-----
-----=#*#+--------=+=----==++=+*+=--+%%#**++---------+*----***+**##*=-+%*+++=--
-----*#**#+-----=---==+++=+*+=++--=+*+*%#*+*---------*+-----+*=-----+#*******##
----=#****#*----==----------+*--=#=---=*%%+----------#=-------*#==##**********#
----=#*****##=---=------------++---++--=*-----------#*----------=##***********#
----=#**#*+*##+----------------=+----+*+-----------**-----------=+*#*********#*
-----=#+*+-*#**#+----------------*---*------------*+-------------=##**********-
------=#+--=#****#*=--------------+++------------*+-----------------*********=-
-----+#=----=#******#*+-----------*=------------*=---------+++#%######****#*---
----=*=-------=+#%##****##*=----=*-------------*=---------+##************#+----
----#+----------------==++***%%%+-------------+=-----+#%#**************##=-----
=***+=-----------------------+#=-------------*#####********#*********##=-------
--=#=-----------------------++--------------#**************##*****#%#=---------
--++-----------------------*+--------------*%#*************##**#%%+------------
--*=----------------------#+--------------++=%*************#%#*=---------------
```

### 요구사항
- cmd 입력 인자로 발표자 목록 입력받기(process argv 사용할 것).
- 발표자 목록은 2명 이상(slice 이용).
- 입력 받은 발표자 목록 중 랜덤으로 발표자를 1명 선출하여 출력.

### use
```
$ npm uninstall -g jaelinny

$ npm install -g ./

$ jaelinny 발표자1 발표자2 발표자3
(랜덤 출력)

---------------------------------------------------------------------=*+-------
---------------------------------------------------------------------=+-#+-----
------------------------------=+*#+----------------------------------+=--*+----
----------------------------+*+==+#+-------------------------------+*=---=#----
--------------------------*#+=++==+#+--------------------------=*#+-------*=---
------------------------+#+====+*++*=*=--------------------=*#*=----------**---
-----------------------**+======+*=*+-*+----------=+***=-+*+-------------++*+--
---------------------=#+*====*+==+*++--*+------+##****#*#+--------------++-#+--
--------------------=#=*+=====+*==*++--=#=---=#********#------------------+%---
--------------------*+-#=======*+=**=---=%-=*#**********-----------------=#+---
-------------------=#=-#=======++=**-----#********#*****----------------=*+----
-------------------**--*++++*####*#=-----+%********##%%#--------======-=#=-----
----+*-**----------#*+*##*+==-----==+***++#*******#*****#*+*##*******#%+-------
---=*++#=**=----=*#%*==------------------=+**+#####*****#*************#+-------
---*=-*#----=***+---=+**##-------------------=**#+#****#*#%#**********#--------
---#=---------------------+------------------------+*##**************#=--------
--+#+----------------------------------------------=*##*************#+---------
--*=*------------------------------------------------=%#********###%*=---------
-=*=--------------===----------------------------------##***#*+------=*##*=----
-=*--------+++=+----=+----------------------------------#*=---------------=++**
-=*--------=%%%*+----+-----------------------------------------------=+++**###+
--*=--=+=----=#%*---==-----------------------------------------=+##+==========+
--**=---=+=----=%+--=--------------------=+**=---------------=##+==+**+++=====#
--+#-=*+--=*----+*-=------------------------=#=-------------+#+=+**+=========+#
---#=---+*=-+=--++----------------------------*------------*#+*#=============**
---+#+++=-=*=+=--=----------------------------==----------+***+++*++========+#=
----#+---=+*=**=-------------------------------=---------=##+**++==========+%*-
----=#=-----=*=--*#+----------------====-----+%+-=##=----=##+=============*%#--
-----+*------+---+*+*=----------==------=+=+*--=#-=++*---=*=============+###=--
------**-----=+--+===--------=------------**=---+===-*=--=*+==========+#*+*----
------*%*-------++-------------=+#%%%+-==-+*---------++---*+========+#*-**-----
-----=#*#+--------=+=----==++=+*+=--+%%#**++---------+*----***+**##*=-+%*+++=--
-----*#**#+-----=---==+++=+*+=++--=+*+*%#*+*---------*+-----+*=-----+#*******##
----=#****#*----==----------+*--=#=---=*%%+----------#=-------*#==##**********#
----=#*****##=---=------------++---++--=*-----------#*----------=##***********#
----=#**#*+*##+----------------=+----+*+-----------**-----------=+*#*********#*
-----=#+*+-*#**#+----------------*---*------------*+-------------=##**********-
------=#+--=#****#*=--------------+++------------*+-----------------*********=-
-----+#=----=#******#*+-----------*=------------*=---------+++#%######****#*---
----=*=-------=+#%##****##*=----=*-------------*=---------+##************#+----
----#+----------------==++***%%%+-------------+=-----+#%#**************##=-----
=***+=-----------------------+#=-------------*#####********#*********##=-------
--=#=-----------------------++--------------#**************##*****#%#=---------
--++-----------------------*+--------------*%#*************##**#%%+------------
--*=----------------------#+--------------++=%*************#%#*=---------------

발표자: 이동욱
```

### dev stack
- WSL > nvm > nodejs v20.11.0. > npm cli

### publish
```
$ npm login
$ npm publish

```

### 제약사항
- 이 프로그램은 Windows 환경 WSL을 사용하였으므로 MAC OS 환경에서 정상적으로 동작하지 않을 수 있음.
