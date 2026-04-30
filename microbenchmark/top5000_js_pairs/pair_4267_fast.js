const Benchmark = {
    run: function() {
        const VAR_1 =
          "?a1=1&a2=2&a3=3&a4=4&a5=5&a6=6&a7=7&a8=8&a9=9&a10=10&a11=11&a12=12&a13=13&a14=14&a15=15&a16=16&a17=17&a18=18&a19=19&a20=20&a21=21";
        function FUNCTION_1(VAR_2, VAR_3) {
          const VAR_8 = RegExp(`(?:^|\\?|&)(${VAR_3})\\=(.*?)(?:&|$)`, "gi");
          const VAR_9 = VAR_8.exec(VAR_1);
          return VAR_9 && VAR_9[2];
        }
        console.log(FUNCTION_1(VAR_1, "a20"));
    }
};