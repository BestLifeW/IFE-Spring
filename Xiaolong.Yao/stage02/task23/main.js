window.onload = function() {
    //前序遍历
    var preOrderTraverse = function(element, callback) {
        if (element && element.nodeType == 1) {
            callback(element);
            var len = element.children.length,
                    i;
            if( len ){
                for ( i = 0; i < len; i++) {
                    (function(){
                        preOrderTraverse(element.children[i], callback)
                    })(i)
                }}
            }
        },
        //后序遍历
        postOrderTraverse = function(element, callback) {
            if (element && element.nodeType == 1) {
                var len = element.children.length,
                        i;
                if( len ){
                    for ( i = 0; i < len; i++) {
                        (function(){
                            postOrderTraverse(element.children[i], callback)
                        })(i)
                    }}
                callback(element);
            }
        };

    var ele = document.getElementById('main'),
          eleOrder = [],

         pushToArray = function(e) {
            eleOrder.push(e)
        },

         render = function(value) {
            var i = 0;
            clearInterval(timer);
            var timer = setInterval(function() {
                if (i > 0) {
                    eleOrder[i - 1].style.backgroundColor = '#fff';

                }
                if (i === eleOrder.length ) {
                    if(value){
                        alert("No Result");
                    }else{
                        alert('DONE！');
                    }

                    clearInterval(timer);
                    return;
                }

                eleOrder[i].style.backgroundColor = 'red';
               
                if(value == eleOrder[i].firstChild.nodeValue.replace(/\s/g,"")){
                    alert('找到啦！')
                    clearInterval(timer);
                    return;
                };

                i++;
            }, 500);
        };

    var preorderBtn = document.getElementById('preorder');
    var postorderBtn = document.getElementById('postorder');

    preorderBtn.addEventListener("click", function() {
        if (eleOrder) {
            eleOrder = [];
        }
        var search = document.getElementById('search'),
            value = search.value;

        preOrderTraverse(ele, pushToArray);
        render(value);
    });



    postorderBtn.addEventListener("click", function() {
        if (eleOrder) {
            eleOrder = [];
        };

        var search = document.getElementById('search'),
            value = search.value;

        postOrderTraverse(ele, pushToArray);
        render(value);
    })

}