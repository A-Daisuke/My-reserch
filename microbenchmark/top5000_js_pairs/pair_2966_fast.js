const Benchmark = {
    run: function() {
        var VAR_1 = "asdf\nlkjsdf;lkjasdfjlsadf\r\nblah\none\ntwo\n\nthree\r\nfour\rfive\r";
        function FUNCTION_1(VAR_2) {
          for (var VAR_6 = VAR_2; VAR_6 < VAR_1.length; VAR_6++) {
            if (VAR_1.charAt(VAR_6) == "\r" || VAR_1.charAt(VAR_6) == "\n") {
              return VAR_6;
            }
          }
          return VAR_1.length;
        }
        for (var VAR_5 = 0; VAR_5 <= VAR_1.length; VAR_5++) {
          FUNCTION_1(VAR_5);
        }
    }
};