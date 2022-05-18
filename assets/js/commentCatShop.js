$(document).ready(function() {
    // Ham scroll to Top
    $("#gototop").hide()

    $(window).scroll(function() {
        if ($(this).scrollTop() >= 420)
            $("#gototop").show("slow")
        else
            $("#gototop").hide("slow")
    })

    $("#gototop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        })
    })

    // Ham scroll fix bug Header che khuat
    // $("#pets").click(function() {
    //     const headerHeight = $(".header-tab").height()
    //     console.log(headerHeight)
    //     const hPet = $(this).attr('href')
    //     const tPet = $(hPet).prop("offsetTop")
        
    //     $("html, body").animate({
    //         scrollTop: (tPet - headerHeight)
    //     })  
    // })

    // $("#stuffs").click(function() {
    //     const hStuff = $(this).attr('href')
    //     const tStuff = $(hStuff).prop("offsetTop")
        
    //     $("html, body").animate({
    //         scrollTop: (tStuff - headerHeight)
    //     })
    // })

    // $("#medicines").click(function() {
    //     const hMedi = $(this).attr('href')
    //     const tMedi = $(hMedi).prop("offsetTop")
        
    //     $("html, body").animate({
    //         scrollTop: (tMedi - headerHeight)
    //     })
    // })

    // $("#buys").click(function() {
    //     const hBuy = $(this).attr('href')
    //     const tBuy = $(hBuy).prop("offsetTop")
        
    //     $("html, body").animate({
    //         scrollTop: (tBuy - headerHeight)
    //     })
    // })

    // $("#comments").click(function() {
    //     const hCmt = $(this).attr('href')
    //     const tCmt = $(hCmt).prop("offsetTop")
        
    //     $("html, body").animate({
    //         scrollTop: (tCmt - headerHeight)
    //     })
    // })


    // Ham them + xoa binh luan
    $("#add-item").click(function() {
        var content = $("#add-comment").val()
        var name = $("#add-name").val()

        if(content && name) {
            $("div.ctrl").prepend(`
                <div>
                    <div class="item active-comment">
                        <div class="avatar col10">
                            <img src="./assets/img/cat-shop/avt-2.jpg" alt="avatar" width="100%">
                        </div>
                        <div class="content-comment col80">
                            <div class="name_User">${name}</div>
                            <div class="content-comment-text">${content}</div>
                        </div>
                        <div class="delete col10">
                            <input type="button" name="delete" value="Xóa">
                        </div>
                    </div>
                </div>
            `)
            $("#add-comment").val("")
            $("#add-name").val("")
            setTimeout(function() {
                $("div.item").removeClass("active-comment")
            }, 1000)
        }

    })

    $("div.ctrl").on("click", "div.item input[type=button]", function() {
        if (confirm("Bạn có muốn xóa dòng bình luận này?") == true)
            $(this).parent().parent().parent().remove()
    })

    $("#add-item-reply").click(function() {
        var contentReply = $("#add-comment-reply").val()
        var nameReply = $("#add-name-reply").val()

        if (contentReply && nameReply) {
            $("div.item-reply").append(`
                <div class="content-comment_reply active-comment">
                    <div class="avatar col10">
                        <img src="./assets/img/cat-shop/avt-1.jpg" alt="avatar" width="100%">
                    </div>
                    <div class="content-comment col80">
                        <div class="name_User">${nameReply}</div>
                        <div class="content-comment-text">${contentReply}</div>
                    </div>
                    <div class="delete col10">
                        <input type="button" name="delete" value="Xóa">
                    </div>
                </div>
            `)
    
            $("#add-comment-reply").val("")
            $("#add-name-reply").val("")
    
            setTimeout(function() {
                $("div.content-comment_reply").removeClass("active-comment")
            }, 1000)
        }

    })

    $("div.item-reply").on("click", "div.content-comment_reply input[type=button]", function() {
        if (confirm("Bạn có muốn xóa dòng bình luận này?") == true)
            $(this).parent().parent().remove()
    })

    // Ham xoa san pham "Thu Cung" khi click "Chot Don"
    $(document).ready(function() {
        $("div.cat").on("click", "div.main-content-classify__pet-item-member__img-button", function() {
            $(this).parent().parent().parent().remove()
        })
    })
})



