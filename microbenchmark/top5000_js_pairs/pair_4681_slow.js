const Benchmark = {
    run: function() {
        var VAR_1 =
          "rating-1-gray-3-blue-rating-1-gray-3-blue-rating-1-gray-3-blue-rating-1-gray-3-blue-rating-1-gray-3-blue-rating-1-gray-3-blue-rating-1-gray-3-blue-rating-1-gray-3-blue-rating-1-gray-3-blue-rating-1-gray-3-blue-rating-1-gray-3-blue-rating-1-gray-3-blue-rating-1-gray-3-blue-rating-1-gray-3-blue-rating-1-gray-3-blue-rating-1-gray-3-blue-rating-1-gray-3-blue";
        +VAR_1
          .split("")
          .filter(function (VAR_2) {
            return (VAR_2 = VAR_2.charCodeAt(0)), VAR_2 > 47 && VAR_2 < 58;
          })
          .join("");
    }
};