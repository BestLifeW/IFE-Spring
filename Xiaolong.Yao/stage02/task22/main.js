window.onload = function() {
    //前序遍历
    var preOrderTraverse = function(element, callback) {
        if (element && element.nodeType == 1) {
            callback(element);
            preOrderTraverse(element.children[0], callback)
            preOrderTraverse(element.children[1], callback)
            }
        },
        //中序遍历
        inOrderTraverse = function(element, callback) {
            if (element && element.nodeType == 1) {
                inOrderTraverse(element.children[0], callback)
                callback(element);
                inOrderTraverse(element.children[1], callback)
            }
        },
        //后序遍历
        postOrderTraverse = function(element, callback) {
            if (element && element.nodeType == 1) {
                postOrderTraverse(element.children[0], callback);
                postOrderTraverse(element.children[1], callback);
                callback(element);
            }
        };

    var ele = document.getElementById('main'),
          eleOrder = [],

         pushToArray = function(e) {
            eleOrder.push(e)
        },

         render = function() {
            var i = 0;
            clearInterval(timer);
            var timer = setInterval(function() {
                if (i > 0) {
                    eleOrder[i - 1].style.backgroundColor = '#fff';
                }
                if (i === eleOrder.length) {
                    alert('DONE！')
                    clearInterval(timer);
                    return;
                }
                eleOrder[i].style.backgroundColor = 'red';
                i++;
            }, 500);
        };

    var preorderBtn = document.getElementById('preorder');
    var inorderBtn = document.getElementById('inorder');
    var postorderBtn = document.getElementById('postorder');

    preorderBtn.addEventListener("click", function() {
        if (eleOrder) {
            eleOrder = [];
        }
        preOrderTraverse(ele, pushToArray);
        render();
    });

    inorderBtn.addEventListener("click", function() {
        if (eleOrder) {
            eleOrder = [];
        }
        inOrderTraverse(ele, pushToArray);
        render();
    });

    postorderBtn.addEventListener("click", function() {
        if (eleOrder) {
            eleOrder = [];
        }
        postOrderTraverse(ele, pushToArray);
        render();
    })

}