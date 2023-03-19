$.mobile.allowCrossDomainPages = true;
_debug = false;

var popUp;
var city_id = '';
var category_id = '';
var category_nm ='';

var gallery_cat = '';
var galstr = '';
var player_cat = '';
var fix_cat = '';

var reg_id = "";
var json_fb='';

var notificationstatus = "";
var pushNotification;

var arr = [];
var countval = Array();
var currentcategory='';
var postregister='';

var lastattemptpage = '';
var filenm='';
var json_fb='https://taghash.co/mloyalApps/facebookoneawadh.php';
var RSS_twitter='https://taghash.co/mloyalApps/twitter.php?uname=oneawadhcenter';
var RSS_pinterest='http://103.25.128.61/projects/taghash/mloyalApps/pinterest612league.php?brand=oneawadhcenter';
var RSS_instagram='https://www.instagram.com/oneawadhcenter/?__a=1';
var RSS_youtube='http://xceedfbapps.com/mloyalfeeds/youtube.php?brandname=oneawadhcenter';
var RSS_tumblr='http://xceedfbapps.com/mloyalfeeds/tumblr.php?brandurl=http://oneawadhcenter.tumblr.com';
var RSS_matchfix = 'http://xceedfbapps.com/ddfeeds/calendar_new.php';//'http://xceedfbapps.com/ddfeeds/myxml.php';
var json_news = 'http://180.179.202.114:82/oneawadhcenter/press_json.jsp';//'http://xceedfbapps.com/mloyalfeeds/divani.php';
var json_gal = 'http://180.179.202.114:82/oneawadhcenter/gallery_json.jsp';
var brandname = 'oneawadhcenter';
var aboutus_det = 'one awadh center';
var brand_url = 'http://www.oneawadhcenter.com/';
var cart = {cartdata: []};
var indexary = new Array();
var ids = [];
var cityarr = new Array();
var cityidarr = new Array();

var backbtn_count='0';

user = {
	"balance" : 0,
	"firstname" : "",
	"id" : "",
	"lastname" : "",
	"total" : 0,
	"validity" : "",
	"mobile" : "",
	"email":"",
	"dob":"",
	"slabid_oneawadhcenter": ""
};

var SERVER = "https://halwasiya.mloyalretail.com/m/"; 
var SERVER1 = "https://halwasiya.mloyalretail.com/";
var SERVER2 = "https://halwasiya.mloyalretail.com/APIs/";


$(document).ready(function (event) {


	$( function() {
		$( "#popupcr" ).enhanceWithin().popup();
		$( "#location_pop" ).enhanceWithin().popup();
		$( "#popup_concierge" ).enhanceWithin().popup();
		$( "#popup_openinghours_fnb_fb" ).enhanceWithin().popup();
	});

    $("#wait").css("display", "none");

    $(document).ajaxStart(function () {
        $("#wait").css("display", "block");
    })

    $(document).ajaxStop(function () {
        $("#wait").css("display", "none");
    });

	//$.mobile.defaultPageTransition ='none';
	/*$.ajax({
   url: 'http://180.179.218.225:82/oneawadhcenter/logixhomepage2.jsp',
   type: 'GET',
   timeout: 30000,
     data: {
            },
   success: function(data, textStatus, xhr) {

     document.getElementById("homepage2content").innerHTML=data;
   
   },
   error: function(xhr, textStatus, errorThrown) {
    
   }
  }); */

	showhomePage2();

			 document.addEventListener("backbutton", function(e){

			 backbtn_count=parseInt(backbtn_count)+1;
				

				 if(backbtn_count=='2')
				{
					 backbtn_count='0';
					 navigator.app.exitApp();
				}
			
			 }, false);


    //getContacts();
  //  console.log("usernameoneawadhcenter:"+localStorage.getItem("usernameoneawadhcenter"));
				if(localStorage.getItem("usernameoneawadhcenter")!=null && localStorage.getItem("usernameoneawadhcenter")!='' && localStorage.getItem("passwordoneawadhcenter")!=null && localStorage.getItem("passwordoneawadhcenter")!='')
                    {
                           $('#username_p').val(localStorage.getItem("usernameoneawadhcenter"));
                           $('#password_myacc').val(localStorage.getItem("passwordoneawadhcenter"));
							user.mobile=localStorage.getItem("usernameoneawadhcenter");
							authenticate();
                                                
                     }
				 else if(localStorage.getItem("usernameoneawadhcenter")!=null && localStorage.getItem("usernameoneawadhcenter")!='' && (localStorage.getItem("passwordoneawadhcenter")==null || localStorage.getItem("passwordoneawadhcenter")=='')) 
	                 {
					   $('#username_p').val(localStorage.getItem("usernameoneawadhcenter"));
					   $.mobile.changePage( "#profilepage", { transition: "none"} );
					   //$.mobile.changePage( "#profilepage", { transition: "none"} );
	                 }
				 else
					  {

							skipvid();
					  }
});


function editInterest()
{
	localStorage["interestoneawadhcenter"] ='';
	arr=[];
	$.mobile.changePage("#interest", {transition: "none"});
}
$(document).on('pageinit', '#interest', function () {

	 $(document).on('tap', '#skip_int', function (e, ui) {

		 $.mobile.changePage("#homePage", {transition: "none"});

});

});

$(document).on('pageinit', '#interest', function () {

	 $(document).on('tap', '#next_int', function (e, ui) {
         
		 localStorage.setItem("profiledone_oneawadhcenter", "Yes");
		  var $checked = $('[name=interestarea]:checked');
          $checked.each(function () {
            
            if(arr.indexOf($(this).val())==-1)
			{
			arr.push($(this).val());
			}
           
			

        });
		localStorage["interestoneawadhcenter"] = JSON.stringify(arr);
		//localStorage.setItem("interestoneawadhcenter", arr);
		 
		 //for (var i=0; i<arr.length;i++ )
		 //{
			 var parr='homepage';
			if(arr.length>=1)
			 {
			
			 var parr=arr[0]+'pg';
			 var barr=arr[0]+'btn';
			             
                $.mobile.changePage('#'+parr, {transition: "none"});
			 
			 }
			 else
			 {
				$.mobile.changePage('#homePage', {transition: "none"});
			 }
		 //}
        
                 
	 });
		
  
});

function skipRegister()
{
	if(localStorage["interestoneawadhcenter"])
		arr = JSON.parse(localStorage["interestoneawadhcenter"]);
		console.log(arr.length);
	 if (arr.length>=1)
			{
		  
				 var parr='homepage';
				if(arr.length>=1)
				 {
				
				 var parr=arr[0]+'pg';
				 var barr=arr[0]+'btn';
				console.log("parr"+parr+"....barr"+barr);				 
					$.mobile.changePage('#'+parr, {transition: "none"});
				 
				}
				 else
				 {
					 console.log("in homepage");
					$.mobile.changePage('#homePage', {transition: "none"});
				 }
			}
				else
					{
					 $.mobile.changePage( "#interest", {transition: "none"} );
					}
}

function skiptoHome()
{
	$.mobile.changePage('#homePage', {transition: "none"});
}


/*$(document).on('pageinit', '#register', function (event, ui) {

  
    $(document).on('tap', '#update_button', function (e, ui) {

        $("#update_button").text("Please Wait..");

        e.preventDefault();
        e.stopPropagation();

        var firstname = $('#textinput-name').val();
        var lastname = '';
        var mobile = $('#textinput-mobile').val();
        var email = $('#textinput-email').val();

        var mm = '';
        var dd = '';
        var yyyy = '';
        //var n = $("input:checked").length;



        $.ajax({
            url: SERVER + 'mloyalregistration.asp',
            type: 'GET',
            timeout: 30000,
            data: {
                FirstName: firstname,
                LastName: lastname,
                deviceid: reg_id,
                cname: '',
                Emailid: email,
                mobileno: mobile,
                dd: dd,
                mm: mm,
                yy: yyyy
                        //subscribe: bc_hair

            },
            success: function (data, textStatus, xhr) {


                if (data.indexOf("Success") >= 0)
                {

                    localStorage.setItem("usernameoneawadhcenter", mobile);
                    toast('Your profile has been created successfully.');
                    user.firstname = firstname;
                    user.lastname = lastname;
                    user.emailid = email;
                    user.dob = dd + "-" + mm + "-" + yyyy;
                    user.mobile = mobile;

                    $('#username').html(firstname);
                    localStorage.setItem("usernameoneawadhcenter_name", user.firstname);
                    if(postregister!='')
					{
						 $.mobile.changePage( '#'+postregister, {transition: "none"} );
						 postregister='';
						 console.log("in postregister");
					}
					else
					{
						 $.mobile.changePage( "#homePage", {transition: "none"} );
					}
                }
                else if (data == 'Failed')
                {
                    toast('You are already registered with us.');
					//localStorage.setItem("usernameoneawadhcenter", mobile);
					//user.mobile = mobile;
                    $("#update_button").text("SUBMIT");
                }
                else
                {
                    $('#update_response_msg').html(data);

                    $("#update_button").text("SUBMIT");
                }

                //$.mobile.changePage( "#homePage", {transition: "flip"} );

            },
            error: function (xhr, textStatus, errorThrown) {
                toast('Could not connect to Server, make sure you are connected to Internet');
                $("#update_button").text("SUBMIT");
            }
        });
        //document.getElementById('username') = user.firstname;
    });

    

});*/

$(document).on('pageinit', '#profilepage_fb', function (event, ui) {

    console.log("in profilepage");

    $(document).on('tap', '#update_button_fb', function (e, ui) {


        e.preventDefault();
        e.stopPropagation();
        var firstname = $('#update_firstname_fb').val();
        var lastname = $('#update_lastname_fb').val();
        var mobile = user.mobile;
        var email = $('#update_email_fb').val();
        var mm;
        var dd;
        var yyyy;
        if (user.dob != null || user.dob != 'null')
        {
            var birthday = $('#update_dob_fb1').val();
            var dob = birthday.split('-');
            mm = dob.length == 3 ? dob[1] : '';
            dd = dob.length == 3 ? dob[0] : '';
            yyyy = dob.length == 3 ? dob[2] : '';
        }
        else
        {
            mm = $('#update_mm1').val();
            dd = $('#update_dd1').val();
            yyyy = $('#update_yyyy1').val();
        }



        $.ajax({
            url: SERVER + 'mloyalprofileupdate.asp',
            type: 'GET',
            timeout: 30000,
            data: {
                FirstName: firstname,
                LastName: lastname,
                deviceid: reg_id,
                cname: '',
                Emailid: email,
                mobileno: mobile,
                dd: dd,
                mm: mm,
                yy: yyyy,
				deviceType:deviceType
                        //subscribe: bc_hair

            },
            success: function (data, textStatus, xhr) {

                console.log("Anoop" + data);



                if (data.indexOf("Success") >= 0)
                {


                    $('#update_response_msg_fb').html('Your profile has been updated successfully.');
                    user.firstname = firstname;
                    user.lastname = lastname;
                    user.emailid = email;
                    user.dob = dd + "-" + mm + "-" + yyyy;

                }
                else if (data == 'Failed')
                    $('#update_response_msg_fb').html('Update failed.');
                else
                    $('#update_response_msg_fb').html(data);


                $.mobile.changePage("#homepage", {transition: "none"});





            },
            error: function (xhr, textStatus, errorThrown) {
                $('#login-msg').html('Could not connect to Server, make sure you are connected to Internet');
            }
        });


    });
    if ($('#update_firstname_fb').val() == '' || $('#update_firstname_fb').val() == 'null' || $('#update_firstname_fb').val() == null || $('#update_firstname_fb').val() == 'undefined')
    {
        $('#update_firstname_fb').val(user.firstname);
        $('#update_lastname_fb').val(user.lastname);

        $('#update_email_fb').val(user.emailid);
        try {
            if (user.dob != null || user.dob != 'null' || user.dob == ' ')
            {
                $('#updt_1').css('display', 'none');
                $('#update_dob_fb1').val(user.dob);
                $('#updt_2').css('display', 'block');
            }
            else
            {
                $('#updt_2').css('display', 'none');
                // $('#update_dob_fb1').val(user.dob);
                $('#updt_1').css('display', 'block');
            }
        } catch (err)
        {
            txt = "There was an error on this page.\n\n";
            txt += "Error description: " + err.message + "\n\n";
            //alert(txt);
        }
    }
});

$(document).on('pageinit', '#profilepage', function (event, ui) {

   
        /*$('#update_firstname').val(user.firstname);
        $('#update_lastname').val(user.lastname);
        $('#update_email').val(user.emailid);

         if(user.dob!='null' && user.dob!='undefined' && user.dob!='' && user.dob!=null && user.dob!=null)
		 {
			 var dob = user.dob.split('/');
			 var mm = dob.length == 3 ? dob[0] : '';
			 var dd = dob.length == 3 ? dob[1] : '';
			 var yyyy = dob.length == 3 ? dob[2] : '';

			 $('#update_dob').val(yyyy+'-'+mm+'-'+dd);
		 }*/
    });

function updateprofile()
{
        var firstname = $('#update_firstname').val();
        var lastname = $('#update_lastname').val();
        //var mobile = user.mobile;
		var mobile = $('#update_mob').val();
        var email = $('#update_email').val();
        var birthday = $('#update_dob').val();
        var dob = birthday.split('-');
        var mm = dob.length == 3 ? dob[1] : '';
        var dd = dob.length == 3 ? dob[2] : '';
        var yyyy = dob.length == 3 ? dob[0] : '';

	if(mobile=='')
	{
		toast('Please enter mobile no.');
	}
	else if(mobile.length!=10)
	{
		toast('invalid mobile no.');
	}
	else
	{

     $.ajax({
            url: SERVER + 'mloyalprofileupdate.asp',
            type: 'GET',
            timeout: 50000,
            data: {

                FirstName: firstname,
                LastName: lastname,
                deviceid:reg_id,
                cname:'',
                Emailid: email,
                mobileno: mobile,
                dd: dd,
                mm: mm,
                yy: yyyy,
                deviceType:deviceType
            },
            success: function (data, textStatus, xhr) {

                //console.log("Anoop"+url);



                if (data.indexOf("Success") >= 0)
                {


                    toast('Your profile has been updated successfully.');

					localStorage.setItem("profiledone_oneawadhcenter","Yes");

					$.mobile.changePage( "#homePage", { transition: "flip"} );
					user.mobile= mobile;
                    //user.firstname = firstname;
                    //user.lastname = lastname;
                    //user.emailid = email;
                    //user.dob=mm+"-"+dd+"-"yyyy;
					document.getElementById("username").innerHTML=firstname+' '+lastname;
					document.getElementById("cardname").innerHTML=firstname+' '+lastname;

					localStorage.setItem('usernameoneawadhcenter',mobile);
					localStorage.setItem('emailid',email);
					localStorage.setItem('firstname',firstname);
					localStorage.setItem('lastname',lastname);
					localStorage.setItem('dob_dd',dd);
					localStorage.setItem('dob_mm',mm);
					localStorage.setItem('dob_yyyy',yyyy);
                    
                }
                else if (data == 'Failed')
                    toast('Update failed.');
               
				// $.mobile.changePage("#homepage", {transition: "none"});

            },
            error: function (xhr, textStatus, errorThrown) {
                toast('Could not connect to Server, make sure you are connected to Internet');
            }
        });
	}
}

function updateprofile2()
{
        var firstname = $('#update_firstname2').val();
        var lastname = $('#update_lastname2').val();
        //var mobile = user.mobile;
		var mobile = $('#update_mob2').val();
        var email = $('#update_email2').val();
        var birthday = $('#update_dob2').val();
        var dob = birthday.split('-');
        var mm = dob.length == 3 ? dob[1] : '';
        var dd = dob.length == 3 ? dob[2] : '';
        var yyyy = dob.length == 3 ? dob[0] : '';

	if(mobile=='')
	{
		toast('Please enter mobile no.');
	}
	else if(mobile.length!=10)
	{
		toast('invalid mobile no.');
	}
	else
	{

     $.ajax({
            url: SERVER + 'mloyalprofileupdate.asp',
            type: 'GET',
            timeout: 50000,
            data: {

                FirstName: firstname,
                LastName: lastname,
                deviceid:reg_id,
                cname:'',
                Emailid: email,
                mobileno: mobile,
                dd: dd,
                mm: mm,
                yy: yyyy,
                deviceType:deviceType
            },
            success: function (data, textStatus, xhr) {

                //console.log("Anoop"+url);



                if (data.indexOf("Success") >= 0)
                {


                    toast('Your profile has been updated successfully.');

					localStorage.setItem("profiledone_oneawadhcenter","Yes");

					$.mobile.changePage( "#homePage", { transition: "flip"} );
					user.mobile= mobile;
                    user.firstname = firstname;
                    user.lastname = lastname;
                    user.emailid = email;
                    user.dob=mm+"-"+dd+"-"+yyyy;

					document.getElementById("username").innerHTML=firstname+' '+lastname;
					document.getElementById("cardname").innerHTML=firstname+' '+lastname;

					localStorage.setItem('usernameoneawadhcenter',mobile);
					localStorage.setItem('emailid',email);
					localStorage.setItem('firstname',firstname);
					localStorage.setItem('lastname',lastname);
					localStorage.setItem('dob_dd',dd);
					localStorage.setItem('dob_mm',mm);
					localStorage.setItem('dob_yyyy',yyyy);

					fetchDetails(mobile);
                    
                }
                else if (data == 'Failed')
                    toast('Update failed.');
               
				// $.mobile.changePage("#homepage", {transition: "none"});

            },
            error: function (xhr, textStatus, errorThrown) {
                toast('Could not connect to Server, make sure you are connected to Internet');
            }
        });
	}
}

$(document).on('pageinit', '#register1', function (event, ui) {

    //console.log("in profilepage");

    $(document).on('tap', '#update_button1', function (e, ui) {


        e.preventDefault();
        e.stopPropagation();
        
        var firstname = $('#textinput-name').val();
        var lastname = $('#textinput-lname').val();
        var mobile = $('#textinput-mobile').val();
        var email = $('#textinput-email').val();
        /*var birthday = $('#update_dob1').val();
        var dob = birthday.split('-');
        var mm = dob.length == 3 ? dob[1] : '';
        var dd = dob.length == 3 ? dob[2] : '';
        var yyyy = dob.length == 3 ? dob[0] : '';*/
        //var devid=$('#push_reg_no').val();
        if(mobile=='')
        {
            toast('mobile no is mandatory');
        }
        else if(mobile.length==10){
        localStorage.setItem('fbfirstname',firstname);
        localStorage.setItem('fblastname',lastname);
        localStorage.setItem('fbmobile',mobile);
        localStorage.setItem('fbemail',email);
        localStorage.setItem("profiledone_oneawadhcenter","Yes");
		 $.mobile.changePage("#register");
		 $.ajax({
			url: SERVER+'forgot_pswd.asp',
			type: 'GET',
			timeout: 30000,
			data: {'mobileno': mobile},
			success: function(data, textStatus, xhr) {
			
			 if(data.toLowerCase()=='success'){

				  toast('The passcode has been sent to your mobile.Please check your SMS.');
			    
				  localStorage.setItem("SMSMNO",mobile);
			      $('#username_p').val(mobile);
				  localStorage.setItem('usernameoneawadhcenter',mobile);
				  $.mobile.changePage("#register");
              }
			  else{
				 toast(mobile+' is not registered, please try again.');
				 //toast('Thank you for your interest in the V Club. The registration is not yet open. We will let you know soon.');
				 $('#forgot_mobile').val('');
			 }
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				 toast('Could not connect to Server, make sure you are connected to Internet');
				}
		});
  }else{
   toast('Please enter 10 digits mobile number');
  }
        
    });
});

function gohome()
{

    $("#page-card .membership").html("#page-card .membership");
    $.mobile.changePage("#register-moreInfo", {transition: "none"});
}


$(document).on('pageinit', '#page-card', function (event, ui) {

    getContacts();


    $(document).on('tap', '#getbarcodes', function (e, ui) {

        $.mobile.changePage("#getbarcode", {transition: "none"});
    });

    renderTemplatedetail('page-card');


});


$(document).on('pageinit', '#gallery1', function (event, ui) {


// receivedEvent('deviceready');
$.ajax({
   url: 'http://180.179.218.225:82/logix/amgallery.jsp',
   type: 'GET',
   timeout: 30000,
     data: {
            },
   success: function(data, textStatus, xhr) {

     document.getElementById("gallerydiv").innerHTML=data;


   
   },
   error: function(xhr, textStatus, errorThrown) {
    
   }
  });

});


$(document).on('pageinit', '#popuppagecard', function (event, ui) {
    var ht = 0.99 * $(window).width();
    try {
        $('#cardcontentpop').css('-webkit-transform', 'rotate(90deg)');
        $('#cardcontentpop').css('-moz-transform', 'rotate(90deg)');
        $('#cardcontentpop').css('-ms-transform', 'rotate(90deg)');
        $('#cardcontentpop').css('-o-transform', 'rotate(90deg)');
        $('#cardcontentpop').css('transform', 'rotate(90deg)');
        $('#cardcontentpop').css('width', 'auto');
        $('#cardcontentpop').css('height', ht);
        $('#cardcontentpop').css('margin', '20% auto');
        $('#cardcontentpop').css('margin-right', '5% !important');
        $('#card_pointspop').css('margin-top', '65%');
        //$('meta[name=viewport]').attr('content', 'initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no,width='+ht + ',height=' + wid);

    } catch (err) {
    }



    renderTemplatedetail('popuppagecard');



});


function showGallery() {
    $.mobile.changePage("#collectionspage", {transition: "none"});
    showTabContentRSS('collections', json_gal);
}
function showNews() {
    $.mobile.changePage("#news", {transition: "none"});
    showTabContentRSS('news', json_news);
}
function showreelpage() {
    $.mobile.changePage("#reelpage", {transition: "none"});
    //showTabContentRSS('reelpage', json_reelpage);
}

 function aboutprg(){
	if(user.mobile==null || user.mobile=='')
	{
		postregister='mloyalpg';
		//$.mobile.changePage( "#register", { transition: "none"} );
		$.mobile.changePage( "#profilepage", { transition: "none"} );
	}
	else
	{
	    $("#navBdr").css('display', 'none');
        $("#navBdr_about").css('display', 'block');
        $("#navBdr_coupon").css('display', 'none');
        $("#navBdr_points").css('display', 'none');

		$("#MESSAGES").css('display', 'none');
		$("#ABOUT").css('display', 'block');
		$("#COUPONS").css('display', 'none');
		$("#POINTS").css('display', 'none');
		renderTemplatedetail('aboutus');
        $.mobile.changePage( "#mloyalpg", {transition: "none"} );
	}
  }   

function showInbox(){
	if(user.mobile==null || user.mobile=='')
	{
	postregister='mloyalpg';
	//$.mobile.changePage( "#register", { transition: "none"} );
	$.mobile.changePage( "#profilepage", { transition: "none"} );
	}
	else
	{
	
	$("#navBdr").css('display', 'block');
    $("#navBdr_about").css('display', 'none');
    $("#navBdr_coupon").css('display', 'none');
    $("#navBdr_points").css('display', 'none');

	$("#MESSAGES").css('display', 'block');
    $("#ABOUT").css('display', 'none');
    $("#COUPONS").css('display', 'none');
    $("#POINTS").css('display', 'none');
    
	$.mobile.changePage( "#mloyalpg", { transition: "none"} ); 
	showTabContent('inbox', 'msg_history_json.asp');
	}
}
function showLoyalty(){
	if(user.mobile==null || user.mobile=='')
	{
	postregister='mloyalpg';
	//$.mobile.changePage( "#register", { transition: "none"} );
	$.mobile.changePage( "#profilepage", { transition: "none"} );
	}
	else
	{
	/*document.getElementById("barcontent").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span class="submenu_button_right" ><a href="javascript:showCoupons();"><div class="couponbx"><span class="age_4">'+user.cpns+' Coupons</span></div><img src="img/sci_coupons.png"/></span></a>';
	document.getElementById("headername").innerHTML='Points';
	 var main = document.getElementById("cardcontent");
	main.style.display = 'none';*/
	$("#navBdr").css('display', 'none');
    $("#navBdr_about").css('display', 'none');
    $("#navBdr_coupon").css('display', 'none');
    $("#navBdr_points").css('display', 'block');

	$("#MESSAGES").css('display', 'none');
    $("#ABOUT").css('display', 'none');
    $("#COUPONS").css('display', 'none');
    $("#POINTS").css('display', 'block');

	$.mobile.changePage( "#mloyalpg", { transition: "none"} ); 
	showTabContent('loyalty', 'points_history_json.asp');
	}
}

function showRewards() {
    RewardsNA();
    /*$.mobile.changePage( "#page-card", { transition: "none"} ); 
     showTabContent('rewardstore', 'coupons_json.asp');
     
     $("a[data-role='button']").button();*/
}
function showcategories() {
    $.mobile.changePage("#reward-cat", {transition: "none"});
    showTabContent('reward-cat', 'categories_json.asp');
}
function showcatbrands(catid) {
    $.mobile.changePage("#reward-brand", {transition: "none"});
    showTabContent('reward-brand', 'coupons_json.asp?cat_id=' + catid);
}
function viewcart() {
    $.mobile.changePage("#page-card", {transition: "none"});
    renderTemplate('viewcart', cart);
    $("a[data-role='button']").button();


}
function showFb() {
    $.mobile.changePage("#social", {transition: "none"});
    showTabContentRSS('socialwall_facebook', json_fb);
}
function showTwitter() {
    $.mobile.changePage("#social", {transition: "none"});
    showTabContentRSS('socialwall_twitter', RSS_twitter);
}
function showPinterest() {
    $.mobile.changePage("#social", {transition: "none"});
    showTabContentRSS('socialwall_pinterest', RSS_pinterest);
}
function showTumblr() {
    $.mobile.changePage("#social", {transition: "none"});
    showTabContentRSS('socialwall_tumblr', RSS_tumblr);
}
function showYoutube() {
    $.mobile.changePage("#social", {transition: "none"});
    showTabContentRSS('socialwall_youtube', RSS_youtube);
}
function showInstagram() {
    $.mobile.changePage("#social", {transition: "none"});
    showTabContentRSS('socialwall_instagram', RSS_instagram);
}
function showSpecial() {
    $.mobile.changePage("#page-card", {transition: "none"});
    //document.getElementById("left-panel").panel( "close" );
    try {
        $("#left-panel").panel("close");
    } catch (err)
    {
    }
    try {
        $("#left-panel1").panel("close");
    } catch (err)
    {
    }
    showTabContent('specials', 'specials_json.asp');
}
function showStores() {
    $.mobile.changePage("#page-card", {transition: "none"});
    //document.getElementById("left-panel").panel( "close" );
    /*try{
     $( "#left-panel" ).panel( "close" );
     }catch(err) 
     {	}
     try{
     $( "#left-panel1" ).panel( "close" );
     }catch(err) 
     {	}*/
    showTabContent('citylist', 'city_locator_json.asp');

    //renderTemplate('citylist',jsonarr);

}

function getCityId(id)
{
    city_id = id;
    $.mobile.changePage("#page-card", {transition: "none"});
    showTabContent('centre', 'store_locator_json.asp?city=' + city_id);
    //var jsonarr = [{"storename":"Mobiquest Mobile Technologies","storeaddress":"B-27,Sector-63,Noida,India","storelocation":"Noida","storephone":"0120-4533930","CustomerCare":""},{"storename":"Xceed IT Solutions","storeaddress":"B-27,Sector-63,Noida,India","storelocation":"Noida","storephone":"0120-4533933","CustomerCare":""}]; 

    // renderTemplate('centre',jsonarr);

}

function showTabContent_Map(addr) {
    var url = "http://delhidaredevilsadda.com/latlong.php";
    $.getJSON(
            url, {
                //page: url,
                addr: addr
            }, function (json) {
        //console.log("SSSS" + JSON.stringify(json));


        var lat, lng;
        try
        {
            lat = json.results[0].geometry.location.lat;
            lng = json.results[0].geometry.location.lng;
        }
        catch (err)
        {
            lat = "";
            lng = "";
        }


        if (lat != "" && lng != "")
        {
            openInWebView('http://maps.google.com/maps/api/staticmap?center=' + lat + ',' + lng + '&zoom=14&amp;size=304x250&scale=2&amp;sensor=false&markers=color:green|' + lat + ',' + lng + '&key=AIzaSyCAAjJ5FAg8NmaZ9594yQXq-t1HzcgYocs&size=279x183');
        }
        else
        {
            toast("Location could not be traced");
        }
    }).error(function () {
        alert("Error: Could not connect to Server, make sure you are connected to Network");
    });
}

function showTabContent_Map1(addr) {
    var url = "http://maps.googleapis.com/maps/api/geocode/json";
    $.getJSON(
            url, {
                //page: url,
                latlng: addr,
                sensor: 'false'
            }, function (json) {
        //console.log("SSSS"+JSON.stringify(json.results[0].address_components[3]));

        for (var i = 0; i < json.results[0].address_components.length; i++)
        {
            console.log("SSSS" + JSON.stringify(json.results[0].address_components[i].types[0]));
            if (json.results[0].address_components[i].types[0] == 'locality')
            {
                var cityname = json.results[0].address_components[i].long_name;
                if (cityarr.indexOf(cityname))
                {
                    var j = cityarr.indexOf(cityname);
                    getCityId(cityidarr[j]);
                }
            }
        }




    }).error(function () {
        alert("Error: Could not connect to Server, make sure you are connected to Network");
    });
}

function showTabContent(id, url) {
    console.log("url" + url);
    var tabserver = '';
    if (id == 'rewardstore' || id == 'reward-cat' || id == 'reward-brand')
    {
        tabserver = "https://halwasiya.mloyalretail.com/Rewards/";
    }
    else
    {

        tabserver = "https://halwasiya.mloyalretail.com/m/";
    }
    $.getJSON(
            tabserver + url, {
                //page: url,
                mno: user.mobile
            }, function (json) {
        console.log("SSSS" + JSON.stringify(json));

        renderTemplate(id, json);
    }).error(function () {
        alert("Error: Could not connect to Server, make sure you are connected to Network");
    });
}

function openInWebView(url)
{
    
		//var ref = window.open(url, '_blank', 'location=yes,toolbar=yes');
		  cordova.ThemeableBrowser.open(url, '_blank', {
               backButtonCanClose: true,
    statusbar: {
        color: '#000000'
    },
    toolbar: {
        height: 78,
        color: '#000000'
    },
    title: {
        color: '#ffffff',
  staticText: '', 
        showPageTitle: false
    },
    backButton: {
        wwwImage: '',
        wwwImagePressed: '',
        align: 'left',
        event: ''
    },
    forwardButton: {
        wwwImage: '',
        wwwImagePressed: '',
        align: 'center',
        event: ''
    },
    closeButton: {
        wwwImage: 'images/leftMenu_back_inapp.png',
        wwwImagePressed: 'images/leftMenu_back_inapp.png',
        align: 'left',
  marginLeft: '15px',
        event: ''
    },
    customButtons: [
        {
            image: 'share',
            imagePressed: 'share_pressed',
            align: 'right',
            event: 'sharePressed'
        }
    ],
    menu: {
        image: 'menu',
        imagePressed: 'menu_pressed',
        title: 'Test',
        cancel: 'Cancel',
        align: 'right',
        items: [
           /* {
                event: 'helloPressed',
                label: 'Hello World!'
            },
            {
                event: 'testPressed',
                label: 'Test!'
            }*/
        ]
    },
    backButtonCanClose: true
}).addEventListener('backPressed', function(e) {
    //alert('back pressed');
}).addEventListener('helloPressed', function(e) {
    //alert('hello pressed');
}).addEventListener('sharePressed', function(e) {
    //alert(e.url);
}).addEventListener(cordova.ThemeableBrowser.EVT_ERR, function(e) {
    console.error(e.message);
}).addEventListener(cordova.ThemeableBrowser.EVT_WRN, function(e) {
    console.log(e.message);
});


}

function openBrowser(url)
{
    
		//var ref = window.open(url, '_blank', 'location=yes,toolbar=yes');
		  cordova.ThemeableBrowser.open(url, '_blank', {
               backButtonCanClose: true,
    statusbar: {
        color: '#000000'
    },
    toolbar: {
        height: 80,
        color: '#000000'
    },
    title: {
        color: '#ffffff',
  staticText: '', 
        showPageTitle: false
    },
    backButton: {
        wwwImage: '',
        wwwImagePressed: '',
        align: 'left',
        event: ''
    },
    forwardButton: {
        wwwImage: '',
        wwwImagePressed: '',
        align: 'center',
        event: ''
    },
    closeButton: {
        wwwImage: 'images/leftMenu_back_inapp.png',
        wwwImagePressed: 'images/leftMenu_back_inapp.png',
        align: 'left',
  marginLeft: '15px',
        event: ''
    },
    customButtons: [
        {
            image: 'share',
            imagePressed: 'share_pressed',
            align: 'right',
            event: 'sharePressed'
        }
    ],
    menu: {
        image: 'menu',
        imagePressed: 'menu_pressed',
        title: 'Test',
        cancel: 'Cancel',
        align: 'right',
        items: [
           /* {
                event: 'helloPressed',
                label: 'Hello World!'
            },
            {
                event: 'testPressed',
                label: 'Test!'
            }*/
        ]
    },
    backButtonCanClose: true
}).addEventListener('backPressed', function(e) {
    //alert('back pressed');
}).addEventListener('helloPressed', function(e) {
    //alert('hello pressed');
}).addEventListener('sharePressed', function(e) {
    //alert(e.url);
}).addEventListener(cordova.ThemeableBrowser.EVT_ERR, function(e) {
    console.error(e.message);
}).addEventListener(cordova.ThemeableBrowser.EVT_WRN, function(e) {
    console.log(e.message);
});


}


function renderTemplate(pageID, json) {
    var str = '';
    var str1 = '';
    var oth = document.getElementById("othercontent");
    var main = document.getElementById("cardcontent");

    console.log('pageID' + pageID);
    switch (pageID) {
        case 'loyalty':

        str += '<br/><div class="pts"><span>' + json.balance + '</span></div>';   
        str += '<p class="tpts">Total Points</p>';


        /*str1 +='<div id="earnpc_ggn">';
	    str1 += '<div id="earnpdiv" class="earnpc">';
		str1 += '<h3>Earn Points</h3>';
		str1 += '<span class="ept">Kindly contact on:</span><br/>';
		str1 += '<a href="tel:+918800853463" class="a_con ui-link">8800853463</a><br/>';
		str1 += '<a href="tel:01244737149" class="a_con ui-link">0124-4737149</a>';
        str1 += '</div>';
		str1 += '<div id="earnpdiv" class="earnpc">';
		str1 += '<h3>Redeem Points</h3>';
		str1 += '<span class="ept">Kindly contact on:</span><br/>';
		str1 += '<a href="tel:+918800853463" class="a_con ui-link">8800853463</a><br/>';
		str1 += '<a href="tel:01244737149" class="a_con ui-link">0124-4737149</a>';
        str1 += '</div>';
		str1 += '</div>';

		str2 +='<div id="earnpc_vk">';
	    str2 += '<div id="earnpdiv" class="earnpc">';
		str2 += '<h3>Earn Points</h3>';
		str2 += '<span class="ept">Kindly contact on:</span><br/>';
		str2 += '<a href="tel:+918130350002" class="a_con ui-link">8130350002</a><br/>';
		str2 += '<a href="tel:01140870066" class="a_con ui-link">011-40870066</a>';
        str2 += '</div>';
		str2 += '<div id="earnpdiv" class="earnpc">';
		str2 += '<h3>Redeem Points</h3>';
		str2 += '<span class="ept">Kindly contact on:</span><br/>';
		str2 += '<a href="tel:+918130350002" class="a_con ui-link">8130350002</a><br/>';
		str2 += '<a href="tel:01140870066" class="a_con ui-link">011-40870066</a>';
        str2 += '</div>';
		str2 += '</div>';*/
        str += '<a href="javascript:purchaseHistory();" id="ptsEarn" class="ui-btn ui-corner-all"><img src="images/earned-points.png" alt="img" class="eIcon"><span>Earned Points :' + json.earnpoints + '</span><span class="purchaseBtnTxt">My Purchase History</span></a>';
        str += '<a href="javascript:redeemHistory();" id="ptsRedeem" class="ui-btn ui-corner-all"><img src="images/redeemed-points.png" alt="img" class="rIcon"><span>Redeemed Points :' + json.burnpoints + '</span><span class="purchaseBtnTxt">My Purchase History</span></span></a>';
		
		str += '<div id="purchaseHistory" style="display:none;">';
		for(var i=0;i<json.data.length;i++)
		{
			str +='<table data-role="none" class="ui-responsive" id="tbl">';
			str +='<caption><span style="float:left;">EARNED POINTS <span class="ptsRed">'+json.data[i].earn+'</span></span>  <span class="cap_date">'+json.data[i].billdate+'</span></caption><tbody>';
			str +='<tr><td>'+(i+1)+'.</td><td>'+json.data[i].billnumber+'</td><td>'+json.data[i].billamount+'</td><td>'+json.data[i].earn+'</td></tr>';
			str +='</tbody></table><br/>';
		}
		str +='</div>';

		str += '<div id="redeemHistory" style="display:none;">';
        for(var i=0;i<json.data.length;i++)
		{
			str +='<table data-role="none" class="ui-responsive" id="tbl">';
		    str +='<caption><span style="float:left;">REDEEM POINTS <span class="ptsRed">'+json.data[i].burn+'</span></span>  <span class="cap_date">'+json.data[i].billdate+'</span></caption><tbody>';
			str +='<tr><td>'+(i+1)+'.</td><td>'+json.data[i].billnumber+'</td><td>'+json.data[i].billamount+'</td><td>'+json.data[i].burn+'</td></tr>';
			str +='</tbody></table><br/>';
		}
	    str +='</div>';

		/*if(localStorage.getItem('selectedstore')=='ggn')
		{
			str += str1;
		}
		else if(localStorage.getItem('selectedstore')=='vk')
		{
			str += str2;
		}*/

        document.getElementById("POINTS").innerHTML=str;   


            break;
        case 'specials':
            console.log(JSON.stringify(json));


            // document.getElementById("barcontent").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span class="submenu_button_right" ><a href="javascript:showCoupons();"><div class="couponbx"><span class="age_4">'+user.cpns+' Coupons</span></div><img src="img/sci_coupons.png"/></span></a>';
            //str = '<div class="subheading_t" style="font-size:14px;"><div class="submenu_button_right" ><a href="#coupons"><div class="couponbx"><span class="age_4">5 Coupons</span></div><img src="img/sci_coupons.png"/></div></a></div><br/><br/>';
            for (var i = 0; i < json.length; i++)
            {
                //str += '<div class="coupon-box"> <input type="checkbox" name="reward_coupon" id='+i+' value="A" class="causes"  /><div class="coupon-box-scissor"></div><div align="center"><span  align="center"><img src='+json.data[i].url+' align="center"></img></span></div><div align="center"><h1>'+json.data[i].BrandValue+'</h1></div><div align="center"><h3>'+json.data[i].BrandPoints+'</h3></div>	<div class="coupon-box-date">['+json.data[i].BrandDescription+'   |   Coupon Code:'+json.data[i].CouponCode+' | Valid till:'+json.data[i].Validity+' ]</div><br clear="all" /><a href=\'javascript:foo('+i+');\' data-role="button" id='+i+'>Add To Cart</a></div>';
                if (json[i].AdVideoURL != '')
                    str += '<div class="specials5"><div><h3>' + json[i].AdName + '</h3><p>' + json[i].AdDesc + '</p><video width="320" height="240" controls="controls" poster=' + SERVER + json[i].AdImgURL + ' onClick=this.play();><source src=' + SERVER + json[i].AdVideoURL + '  this.play();/></video><br/><hr/></div></div>';
                else
                    str += '<div class="specials5"><div><h3>' + json[i].AdName + '</h3><p>' + json[i].AdDesc + '</p><video width="320" height="240"  poster=' + SERVER + json[i].AdImgURL + ' onClick=this.play();><source src=' + SERVER + json[i].AdVideoURL + '  this.play();/></video><br/><hr/></div></div>';

            }

            //document.getElementById("headername").innerHTML='Divani';
            oth.innerHTML = str;
            oth.style.display = 'block';
            main.style.display = 'none';

            break;
        case 'coupons':


            str = '';


            if (json.data.length == 0) {
                str = 'No Coupons Found';
            }
			else
			{
				for(var i=0;i<json.data.length;i++)
			{
			str += '<div class="ui-grid-a">';
			str += '<div class="ui-block-a" style="width:15%;"><img src="images/couponsp.png" class="msgImg"/></div>';
			str += '<div class="ui-block-b" style="width:85%;">';
			str += '<div class="MsgBlk"><a href="#headline">';
			str += '<span class="MsgBdr"><span class="msghdr">DM-ONEAWD</span><span class="msgTime"> '+json.data[i].issueddate+'</span>'; 
			str += '<span class="msgTxt"><div class="coupon-box"><div class="coupon-box-scissor"></div><div><span class="bold">Coupon Code : '+json.data[i].couponcode+'</span> | <span class="red">'+json.data[i].couponstatus+'</span></div><div>Coupon Details: '+json.data[i].offername+'</div>	<div class="coupon-box-date">[ Issued On: '+json.data[i].issueddate+' | Valid till: '+json.data[i].validtill+']</div></div></span>';
			str += '</span></a></div></div></div>';
			}
			}
		//str += '</ul>';
		document.getElementById("COUPONS").innerHTML=str;  
		
            break;
        case 'inbox':

         str +=' <ul data-role="listview" data-inset="true" id="MsgUl">';
		 for(var i=0;i<json.length;i++ )
			{

			str += '<li data-icon="false">';
			str += '<div class="ui-grid-a"><div class="ui-block-a" style="width:15%;">';
			str += '<img src="images/open.png" class="msgImg"/>';
			str += '</div><div class="ui-block-b" style="width:85%;">';
			str += '<div class="MsgBlk"><span class="MsgBdr">';
			str += '<span class="msghdr">DM-ONEAWD</span><span class="msgTime">'+json[i].msgtime+'</span>'; 
			str += '<span class="msgDate">' + json[i].msgdate + '</span>';
			str += '<span class="msgTxt">'+json[i].msg+'</span>';
			str += '</span></div></div></div></li>';
		
			}
		
		str +='</ul>';
		document.getElementById("MESSAGES").innerHTML=str;
            break;

        case 'centre':
            console.log('inside centre');
            console.log('json' + JSON.stringify(json));

            str += '<ul data-role="listview" data-autodividers="false" data-filter="true" data-inset="false" class="ul_locator_sub" id="ul_locator_sub">';
            for (var i = 0; i < json.length; i++)
            {
                str += '<li data-icon="false" style="background:#eeeeee;margin-top: 5px;margin-bottom: 5px;">' + json[i].storename + ',' + json[i].storelocation + '<br/><span class="callout1">' + json[i].storeaddress + '</span><br/><br/><a href="tel:' + json[i].storephone + '\'" data-role="button" class="ui-btn ui-icon-phone ui-btn-icon-left" rel="external">' + json[i].storephone + '</a><a href="javascript:showTabContent_Map(\'' + json[i].storeaddress + '\');" data-role="button" class="ui-btn ui-icon-location ui-btn-icon-left" rel="external">Map</a></li>';
                //str += '<li data-icon="false"><span class="callout-date1">'+json[i].storename+', '+json[i].storelocation+'</span><br/><span class="callout1">'+json[i].storeaddress+'</span><br/><div class="ui-grid-a"><div class="ui-block-a"><a href="tel:'+json[i].storephone+'" class="ui-btn ui-icon-phone ui-btn-icon-left" rel="external">'+json[i].storephone+'</a></div><div class="ui-block-b"><a href="#" class="ui-btn ui-icon-location ui-btn-icon-left" rel="external">Map</a></div></div></li>';
                //str += '<div class="center-box"><div class="callout-date1">'+json[i].storename+', '+json[i].storelocation+'</div><div class="callout1">'+json[i].storeaddress+'<br/><a href="tel:'+json[i].storephone+'" class="ui-btn ui-icon-phone ui-btn-icon-left" data-role="button" rel="external">'+json[i].storephone+'</a></div></div>';
            }
            str += '</ul>';
            //document.getElementById("headername").innerHTML='Stores';
            oth.innerHTML = str;
            oth.style.display = 'block';
            main.style.display = 'none';
            $('#ul_locator_sub').listview();
            break;
        case 'defstore':
            console.log('inside default store' + user.def_store);
            console.log('json' + JSON.stringify(json));
            //str +='<div  style="text-align:center;width:100%;"><img src="img/c-logo.png" width="137" height="44" /></div>';
            str += '<h2 align="center" style=\"color:#ff0000;font-size:14px;font-weight:normal;\">Default Store : ' + user.def_store + '</h2>';
            str += '<a href="#citylist" data-role="button" data-theme="reset" class="ios">View All Stores</a>';
            str += '<h3 align="center" style=\"color:#ff0000;font-size:14px;font-weight:normal;\">Other Stores in your city</h3><h3></h3>';
            //$("#" + pageID + " .ui-content").html(str);
            $("#" + pageID + " .ui-content").html(str + $.render[pageID](json));
            $("a[data-role='button']").button();
            break;
        case 'citylist':
            console.log('inside citylist');
            console.log('json' + JSON.stringify(json));
            main.style.display = 'none';
            str += '<ul data-role="listview" data-autodividers="false" data-filter="true" data-inset="false" class="ul_locator" id="ul_locator">';
            for (var i = 0; i < json.data.length; i++)
            {
                cityidarr[i] = json.data[i].cityid;
                cityarr[i] = json.data[i].cityname;
                //str +='<a href="javascript:getCityId('+json.data[i].cityid+');" data-role="button"  data-theme="reset" class="ios">'+json.data[i].cityname+'</a>'
                str += '<li data-icon="false"><a href="javascript:getCityId(' + json.data[i].cityid + ');" class="ui-btn ui-icon-location ui-btn-icon-left ui-shadow ui-corner-all">' + json.data[i].cityname + '</a></li>';
            }
            str += '</ul>';
            //document.getElementById("headername").innerHTML='Stores';
            ///document.getElementById("barcontent").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><a href="javascript:getNearStores();"><span class="myacc">Find Nearby Stores</span></a>';
            oth.innerHTML = str;
            oth.style.display = 'block';
            $('#ul_locator').listview();
            //$("a[data-role='button']").button();
            break;

        case 'merchandise':
            console.log(JSON.stringify(json));

            /*str += '<h3>Merchandise</h3>';
             
             
             for (var i=0;i<json.length;i++ )
             {
             
             str += '<div><div><h3>'+json[i].AdName+'</h3><p>'+json[i].AdDesc+'</p><video width="320" height="240"  poster='+json[i].AdImgURL+' onClick=this.play();><source src='+SERVER+json[i].AdVideoURL+'  this.play();/></video><br/><hr/> <a href="#" data-role="button" id="forgot_button">Order</a></div></div>';
             
             }
             
             
             $("#" + pageID + " .ui-content").html(str);*/
            break;
        case 'categorylist':
            console.log(JSON.stringify(json));

            //str = str +'<div class="subheading_t" style="font-size:14px;"><div style="color:#555555;">Welcome '+user.firstname+'</div><div class="submenu_button_right" ><img src="img/coupons.png" style="height:26px;width:auto;"></div></div>';
            str += '<img src="img/rstore.png" style="width:97%;height:auto;"><br/>';
            //str +='<div id="rss_desc1"><ul>';
            // str +='<ul>';
            // for (var i=0;i<json.length;i++ )
            //{
            //str +='<li><a href="javascript:getCatDetails('+json[i].Catid+');" data-theme="reset" class="ios" style="background: url(../img/shop_categoryList.png);height: 78px;color:#000;">'+json[i].CatName+'</a></li>';
            //str +='<li class="s_cn"><a href="javascript:getCatDetails('+json[i].Catid+');" style="background-image: url(../img/s_cn.png);color:#000;text-align:center;">'+json[i].CatName+'</a></li>';
            //}
            // str +='</ul>';
            //str +='</ul></div>';
            $("#" + pageID + " .ui-content").html(str);

            $("a[data-role='button']").button();
            break;

        case 'rewardsmain':

			str='<div class="ui-grid-solo"><div class="ui-block shpcat">Offers & Events</div></div>';

			/*var i = 0;
			while (i < json.length)
			{
				str +='<div class="ui-grid-a nomp">';
				for (var j = 1; j <= 2; j++)
				{
				 if (j==1)
					{
						str +='<div class="ui-block-a">';
						str+='<div class="y_main">';
						str+='<img src="'+json[i].offerimage+'" />'
						//str+='<div class="y_title">'+json[i].retailer;
						//str+='</div>';
						str+='<div class="paratxt_ofr">';
						str+='<p>'+json[i].offer+'</p>';
						if(json[i].tnc.length>0)
						{
						str +='<div id="newsoffer'+i+'"><br/><a href="javascript:opennewsdetailoffer('+i+');" class="login_btn"><img src="images/qm.png" alt="T&C" /></a></div>';
						str+='<div id="newsdetailoffer'+i+'" class="hidediv dmargin">'+json[i].tnc+'</div>';
						}
						str+='</div>';
						str+='</div>';
						str+='</div>';
						i=i+1;
					}
				 if (j==2)
					{
						str +='<div class="ui-block-b">';
						str+='<div class="y_main">';
						str+='<img src="'+json[i].offerimage+'" />'
						//str+='<div class="y_title">'+json[i].retailer;
						//str+='</div>';
						str+='<div class="paratxt_ofr">';
						str+='<p>'+json[i].offer+'</p>';
						if(json[i].tnc.length>0)
						{
						str +='<div id="newsoffer'+i+'"><br/><a href="javascript:opennewsdetailoffer('+i+');" class="login_btn"><img src="images/qm.png" alt="T&C" /></a></div>';
						str+='<div id="newsdetailoffer'+i+'" class="hidediv dmargin">'+json[i].tnc+'</div>';
						}
						str+='</div>';
						str+='</div>';
						str+='</div>';
						i=i+1;
					}

				}
				str+='</div>';
			}*/

				for(var i=0;i<json.length;i++)
					{
							str+='<div class="ui-grid-a" style="padding:10px;margin:10px;border:1px solid #aeaeae">';
							str+='<div class="ui-block-a">';
							str+='<div id="fnb_fb_iProduct_img" class="brand_inner" onClick=javascript:enlargeImg(\''+json[i].offerimage+'\');><img src='+json[i].offerimage+' class="productImg" alt="Image"></div>';
							str+='</div>';
							str+='<div class="ui-block-b">';
							str+='<div id="fnb_fb_iProduct_img1" class="brand_inner">';
							str+='<h2 style="text-shadow:none;text-align: center;">'+json[i].offer+'</h2>';
							//str+='<h3 style="color:#04bc9c;text-shadow:none;">'+json.data[i].offersmstext+'</h3>';
							str+='</div>';               
							str+='</div>';
							str+='</div>';
					}
            
            $("#" + pageID + " .ui-content").html(str);

            break;

        case 'viewcart':

            //str += '<div class="cartinfo">You have '+json.cartdata.length+' items in your cart</div>';

            str += '<ul data-role="listview" data-autodividers="false" data-filter="true" data-inset="false" class="ul_locator_sub" id="cartlist">';
            for (var i = 0; i < json.cartdata.length; i++)
            {


                str += '<li data-icon="delete" data-iconpos="right" style="background:#eeeeee;margin-top: 5px;margin-bottom: 5px;line-height:90px;"><img src=' + json.cartdata[i].url + ' style="width: 100px;height: 100px;padding: 5px;"/>' + json.cartdata[i].BrandName + ' Offer,Cost:Rs. ' + json.cartdata[i].BrandValue + '<br/><span class="callout1">' + json.cartdata[i].BrandDescription + '</span></li>';



                //	str +='<li><div class="li-img"><img src='+json.cartdata[i].url+' /></div><div class="li-text"><h4 class="li-head">'+json.cartdata[i].BrandName+' Offer,Cost:Rs. '+json.cartdata[i].BrandValue+'</h4><br/><p class="li-sub">'+json.cartdata[i].BrandDescription+'</p></div></li>';

            }
            str += '</ul>';

            str += '<br clear="all" /><a href="#" data-role="button" id="view_cart" class="btnclass">Redeem</a>';
            console.log("str herrrrrr" + str);
            oth.innerHTML = str;
            oth.style.display = 'block';
            main.style.display = 'none';
            $('#cartlist').listview();
            $('#view_cart').button();
            break;

        case 'rewardstore':


            document.getElementById("barcontent").innerHTML = '<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi ' + user.firstname + '!</span><span><img src="img/pro_btn_star.png" class="mem_acc_icon_rewardstore"></span><span><a href="javascript:showcategories();"><img src="img/menu_icon.png" class="rewardstore_menu"></a></span>';
            jsonary = json.data;

            // str += '<div class="ui-content rsbanner"><span class="vouchers"><a href=\'javascript:addincart('+i+');\' id='+i+'><img src="img/get_voucher.png" class="vouchers" id="vouchers"'+i+'/></a></span><img src="img/featured.png" class="rs_b1" /></div>';

            for (var i = 0; i < json.data.length; i++)
            {

                if (json.data[i].BrandDescription == 'Featured')
                {

                    str += '<div class="ui-content rsbanner"><a href=\'javascript:addincart(' + i + ');\' id=' + i + '><div class="cartbx">Add to Cart</div></a><br/><img src=' + json.data[i].url + ' class="rs_b1" /></div>';
                }
                else
                {


                    //str += '<div class="ui-content rs_msg"><a href=\'javascript:addincart('+i+');\' id='+i+'><div class="cartbx">Add to Cart</div></a><br/><img src="http://portico.mloyalengage.com/'+json.data[i].brand_logo+'" class="rs_b2"></div>';
                    str += '<div class="ui-content rs_msg"><img src="" class="rs_b2"><div class="amount_date"> <b>Rs. ' + json.data[i].gift_voucher_value + '</b><br/>Valid Thru : ' + json.data[i].end_date + '</div></div>';

                    str += '<div class="ui-grid-a msg_cont"><div><img src="' + SERVER1 + json.data[i].brand_logo + '" class="img_blogo1"></div><div class="ui-block-a wid20"></div>';


                    str += '<div class="ui-block-b wid80"><div class="ui-grid-a"><div class="ui-block-a wid60"><span class="headergjw">' + json.data[i].brand_name + ' </span><br/>';
                    str += '<span class="sub1header">Rewards Manager </span><br/><span class="sub2header">Friday at 10:40 am </span><br/></div>';
                    str += '<div class="ui-block-b wid40"><div class="flt_rght">';
                    //str += '<a href="javascript:likeMessage_rewards(\''+json.data[i].brand_id+'\',\''+i+'\');" data-role="button"><span id="likingrewards'+i+'"><img src="img/msg_up.png"></span></a>';
                    str += '<span><a href="javascript:shareMessage(\'' + json.data[i].brand_description + '\');" data-role="button"><img src="img/msg_share.png"></a></span>';
                    str += '</div></div></div><hr class="style-one">';
                    str += '<div class="ui-grid-solo"><div class="ui-block"><span class="paratxt">' + json.data[i].brand_description;
                    str += '</span></div></div></div></div>';
                    str += '<div class="ui-grid-solo msg_like_comt"><div class="rs_lk_cmt">';
                    //  str += '<span class="msg_lke"><a href=\'javascript:addincart('+i+');\' id='+i+'><img src="img/get_voucher.png" id="vouchers"'+i+'/></a></div></div></div></div><br/><br/>';
                    str += '<span class="msg_lke"><a href=\'javascript:getVoucher(' + json.data[i].gv_id + ',' + json.data[i].gift_voucher_value + ');\' id=' + i + '><img src="img/get_voucher.png" id="vouchers"' + i + '/></a></div></div></div></div><br/><br/>';
                }


            }
            //str +='Coming Soon';
            document.getElementById("headername").innerHTML = 'Rewardstore';
            oth.innerHTML = str;
            oth.style.display = 'block';
            main.style.display = 'none';
            break;
        case 'reward-cat':
            str += '<ul data-role="listview" id="ul_reward-cat" class="ul_shop" data-icon="false" data-iconpos="none">';
            for (var i = 0; i < json.data.length; i++)
            {
                str += '<li class="lt_shop" data-theme="a" data-icon="false" data-iconpos="none"><a href="javascript:showcatbrands(' + json.data[i].catid + ');" class="lt_shop_a"><h2>' + json.data[i].catname + '</h2></a></li>';
            }
            str += '</ul>';
            //str +='Coming Soon';
            $("#" + pageID + " .ui-content").html(str);
            $('#ul_reward-cat').listview();
            break;
        case 'reward-brand':
            for (var i = 0; i < json.data.length; i++)
            {

                if (json.data[i].BrandDescription == 'Featured')
                {

                    str += '<div class="ui-content rsbanner"><a href=\'javascript:addincart(' + i + ');\' id=' + i + '><div class="cartbx">Add to Cart</div></a><br/><img src=' + json.data[i].url + ' class="rs_b1" /></div>';
                }
                else
                {


                    //str += '<div class="ui-content rs_msg"><a href=\'javascript:addincart('+i+');\' id='+i+'><div class="cartbx">Add to Cart</div></a><br/><img src="http://portico.mloyalengage.com/'+json.data[i].brand_logo+'" class="rs_b2"></div>';
                    str += '<div class="ui-content rs_msg"><img src="" class="rs_b2"><span class="amount_date"> <b>Rs. ' + json.data[i].gift_voucher_value + '</b><br/>Valid Thru : ' + json.data[i].end_date + '</span></div>';

                    str += '<div class="ui-grid-a msg_cont"><div><img src="' + SERVER1 + json.data[i].brand_logo + '" class="img_blogo1"></div><div class="ui-block-a wid20"></div>';


                    str += '<div class="ui-block-b wid80"><div class="ui-grid-a"><div class="ui-block-a wid60"><span class="headergjw">' + json.data[i].brand_name + ' </span><br/>';
                    str += '<span class="sub1header">Rewards Manager </span><br/><span class="sub2header">Friday at 10:40 am </span><br/></div>';
                    str += '<div class="ui-block-b wid40"><div class="flt_rght">';
                    // str += '<a href="javascript:likeMessage_rewards(\''+json.data[i].brand_id+'\',\''+i+'\');" data-role="button"><span id="likingrewards'+i+'"><img src="img/msg_up.png"></span></a>';
                    str += '<span><a href="javascript:shareMessage(\'' + json.data[i].brand_description + '\');" data-role="button"><img src="img/msg_share.png"></a></span>';
                    str += '</div></div></div><hr class="style-one">';
                    str += '<div class="ui-grid-solo"><div class="ui-block"><span class="paratxt">' + json.data[i].brand_description;
                    str += '</span></div></div></div></div>';
                    str += '<div class="ui-grid-solo msg_like_comt"><div class="rs_lk_cmt">';
                    //str += '<span class="msg_lke"><a href=\'javascript:addincart('+i+');\' id='+i+'><img src="img/get_voucher.png" id="vouchers"'+i+'/></a></div></div></div></div><br/><br/>';
                    str += '<span class="msg_lke"><a href=\'javascript:getVoucher(' + json.data[i].gv_id + ',' + json.data[i].gift_voucher_value + ');\' id=' + i + '><img src="img/get_voucher.png" id="vouchers"' + i + '/></a></div></div></div></div><br/><br/>';
                }


            }
            $("#" + pageID + " .ui-content").html(str);
            break;
		
		case 'movies':
			
		   var str='';
		   var str1='';
		   console.log('inside movies');
		   var l=json.data.length;
		   
            for(var i=0;i<l;i++) 
			{	
				$("#mv"+(i+1)).css("display","block");
				//document.getElementById("imgM"+(i+1)).src=''+json.data[i].image;
				document.getElementById("imgM"+(i+1)).src='http://180.179.221.93/vrimages/movies/'+json.data[i].image;
				document.getElementById("titleM"+(i+1)).innerHTML=json.data[i].movieName;
				document.getElementById("CensorM"+(i+1)).innerHTML='('+json.data[i].Censor+')';
				document.getElementById("langM"+(i+1)).innerHTML=json.data[i].movieLanguage;
				document.getElementById("timeM"+(i+1)).innerHTML=json.data[i].movieSchedule;
				//document.getElementById("dateM"+(i+1)).innerHTML=json.data[i].startDate+' to '+json.data[i].endDate;
				/*str +='<a href=\"javascript:openInWebView(\''+json.data[i].trailer+'\');\">View Trailer</a>';
				document.getElementById("linkM"+(i+1)).innerHTML=str;*/
	        }

			break;

        case 'socialwall_youtube':

            //str += '<a href=\"javascript:loadDataGal(\''+gallery_cat+'\');\" data-role=\"button\" data-theme=\"reset\" class=\"ios\"><span><img src=\"img/cheer/refresh.png\" /></span></a></div>';

            for (var i = 0; i < json.length; i++)
            {
                //console.log(JSON.stringify(json[i]));
                if (json[i].link != '')
                {

                    //console.log(json[i].link[1].href);
                    //console.log(json[i].link[1].href.indexOf("videos/")+7);

                    //console.log(json[i].link[1].href.substring(json[i].link[1].href.indexOf("videos/")+7,json[i].link[1].href.indexOf("/related")));


                    str1 = "http://www.youtube.com/embed/" + json[i].link[1].href.substring(json[i].link[1].href.indexOf("videos/") + 7, json[i].link[1].href.indexOf("/related"));
                    //console.log(str1);



                    str += '<div id="rss_desc"><div><span style=\"color:#F39E34;font-size:12px;font-weight:bold;\">' + json[i].title.t + '</span><HR>';


                    str += '<iframe width="95%" height="240" src=' + str1 + ' frameborder="0" allowfullscreen=""></iframe>';
                    str += '<br/>' + json[i].content.t;


                    str += '</div></div>';


                }
            }

            //document.getElementById("headername_social").innerHTML='Video Gallery';	   
            //document.getElementById("barcontentsocial").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span><a href="javascript:showYoutube();"><img src="img/refresh.png" class="mem_acc_icon"></a></span><a href="javascript:showLoyalty();"><span class="myacc">My Account</span></a>';
            document.getElementById("contensocial").innerHTML = str;
            break;
        case 'socialwall_facebook':

		for (var i = 0; i < json.data.length; i++)
            {

                if (json.data[i].link != '')
                {
                    var fbid=json.data[i].id;
                    
                    
                    
                    var first_part=fbid.substr(0,fbid.indexOf('_'));
                     
                     var sec_part=fbid.substr(fbid.indexOf('_')+1,fbid.length);
                    
                    
                    var linkfbpost='https://www.facebook.com/'+first_part+'/posts/'+sec_part;
                   
                    
                    
				
				var msg=json.data[i].message;
				if(msg=='' || msg=='undefined' || msg==null || msg=='null')
					{
						msg='';
					}
		
				var lk='';
				if(json.data[i].likes)
				{
					lk= json.data[i].likes.data.length;
				}
				else
				{
					lk= '0';
				}
				

				str+='<div class="ui-grid-solo">';
				str+='<div class="ui-block">';
				str+='<ul class="facebookFeed">';
				str+='<li>';
				str+='<div class="f_feedCon"><div class="f_feed_hdr">';
				
				if(typeof json.data[i].picture !== "undefined" && json.data[i].picture != null)
				{
					str+='<div class="f_feed_bdy"><img src='+json.data[i].picture+' id="f_banner" alt="banner" onClick="javascript:openurl();"></div>';
				}

				str+='<div class="f_feed_bdy"><p id="fb_msg">'+msg+'</p></div>';
				str+='<div class=f_feed_ftr><div class=f_bdy_likes>'+lk+' Likes</div><hr class=hori /><div class=f_bdy_lcs><span><img src=images/social/like.jpg onClick=javascript:openBrowser(\''+linkfbpost+'\');>Like</span><span><img src=images/social/comment.jpg onClick=javascript:openBrowser(\''+linkfbpost+'\');>Comment</span><span><img src=images/social/share.jpg onClick=javascript:openBrowser(\''+linkfbpost+'\');>Share</span></div>';
				str+='</div>';
				str+='</li>';
				str+='</ul>';
				str+='</div>';
				str+='</div>';

                }
            }

			document.getElementById("FACEBOOK").innerHTML = str;
            
            break;

		case 'socialwall_twitter':


		for (var i = 0; i < json.length; i++)
            {

					str+='<ul class="facebookFeed">';
					str+='<li>';
					str+='<div class="y_feedCon">';
					str+='<div class="ui-grid-a">';
					str+='<div class="ui-block-a" style="width:26%;"><img src="images/social/twitter.png" alt="twitter" class="y_video"></div>';
					str+='<div class="ui-block-b" style="width:74%;padding-left:10px;">';
					str+='<div class="y_hdr_title">'+json[i].user.name+'</div>';
					//str+='<div class="y_hdr_desc">'+json[i].user.description+'</div>';
					try{
					str+='<div class="f_feed_bdy"><img src='+json[i].entities.media[0].media_url+' id="f_banner" alt="banner" onClick=javascript:openBrowser(\''+json[i].entities.urls.url+'\');></div>';
					}
					catch(err){}
					str+='<div class="y_hdr_desc">'+json[i].text+'</div>';
					//str+='<div class=f_bdy_likes>'+json[i].user.followers_count+' Followers</div>';
					str+='</div></div></div></li></ul>';

                
            }

            document.getElementById("TWITTER").innerHTML = str;

            break;

		case 'socialwall_pinterest':
		console.log(JSON.stringify(json));
		for (var i=0;i<json.length;i++ )
		{
				console.log(json[i].name);
				str+='<ul class="facebookFeed">';
				str+='<li>';
				str+='<div class="f_feedCon"><div class="f_feed_hdr">';
				str+='<div class="f_hdr_txt"><span class="f_hdr_title" id="f_hdr_title">'+brandname+'</span><br/><span class="f_hdr_desc" id="f_hdr_desc">'+json[i].board.name+'<br>'+json[i].desc+'</span></div>';
				str +='<div class="ui-grid-solo"><div class="ui-block"><img src="'+json[i].src+'" ></div></div>';
				str+='</div>';
				str+='</li>';
				str+='</ul>';
		}
        
        
        document.getElementById("PINTEREST").innerHTML=str;
		break;
		case 'socialwall_tumblr':
		console.log(JSON.stringify(json));
		for (var i=0;i<json.length;i++ )
		{
        
         if(json[i].link!='')
			{
		
				str += '<div id="rss_desc"><div><img src="img/ddsmall.jpg"><div style=\"margin: -50px 5px 20px 60px;\"><span style=\"color:#F39E34;font-size:12px;font-weight:bold;\">'+json[i].title+'</span><br/><span style="font-size:11px;color:#999999;"></span></div><HR><div style=\"margin: 10px 10px 10px -20px;\" class="content-responsive">'+json[i].description+'</div><HR><a href=\"javascript:playvideo(\''+json[i].link+'\');\" data-role=\"button\" data-theme=\"reset\" class=\"ios\"><div class=\"see-all\">See All</div></a></div></div>';
				
		
			}
		}
        
        document.getElementById("contensocial").innerHTML=str;
		break;
		case 'socialwall_instagram':

		//console.log('instagram: '+JSON.stringify(json));

		for (var i = 0; i < json.media.nodes.length; i++)
        {
     
				str+='<ul class="facebookFeed">';
				str+='<li>';
				str+='<div class="f_feedCon"><div class="f_feed_hdr">';
				//str+='<div class="f_hdr_img"><img src="images/social/profile.jpg" id="f_profile" alt="profile"></div>';
				str+='<div class="f_hdr_txt"><span class="f_hdr_title" id="f_hdr_title">'+json.full_name+'</span><br/><span class="f_hdr_desc" id="f_hdr_desc">'+json.media.nodes[i].caption+'</span></div>';
				str +='<img style="border: 1px solid #cccccc;text-align: center;width: 98%;height: auto;" src="'+json.media.nodes[i].display_src+'" />';
				str+='<div class=f_bdy_likes>'+json.media.nodes[i].likes.count+' Likes</div>';
				str+='</div>';
				str+='</li>';
				str+='</ul>';

		}

        document.getElementById("INSTAGRAM").innerHTML = str;

        break;

        case 'popuppage4':


            for (var i = 0; i < json.data.length; i++)

            {

                str += '<ul data-role="listview" data-inset="true" class="listPpup ui-listview ui-listview-inset ui-corner-all ui-shadow" data-icon="false">';
                str += '<li class="ui-li-has-thumb ui-first-child ui-last-child"><a href="#" class="ui-btn"><img src="img/rstar.jpg"/>';
                str += '<h2>' + json.data[i].offername + '</h2><p>Coupon Code : ' + json.data[i].couponcode + '</p></a>';
                str += '</li></ul>';


            }
            $("#" + pageID + " .ui-content").html(str);
            break;

        case 'showmore':

            //document.getElementById("barcontent15").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span class="submenu_button_right" ><a href="javascript:showCoupons();"><div class="couponbx"><span class="age_4">'+user.cpns+' Coupons</span></div><img src="img/sci_coupons.png"/></span></a>';
            str += '<div style="background:rgba(0,0,0,0.7);">';
            str += '<div class="pointsget">What you can get with your shopping?</div>';
            str += '</div><br/>';
            //str += '<div class="ui-grid-c"><div class="ui-block-a" style="padding-left:6px;"><span class="agebox_2" style="background: linear-gradient(to bottom, #ffffff 0%,#ffffff 80%,rgb(255,219,23) 20%,rgb(255,219,23) 100%);">5</span><img src="img/sub1.png" style="height:60px;width:auto;float:left;padding-left:6px;"><br/><br/><div class="pointstext">FREE MEDIUM DRINK</div></div>';
            //str += '<div class="ui-block-b" style="padding-left:10px;"><span class="agebox_2" style="background: linear-gradient(to bottom, #ffffff 0%,#ffffff 90%,rgb(255,219,23) 10%,rgb(255,219,23) 100%);">10</span><img src="img/sub2.png" style="height:60px;width:auto;float:left;padding-left:6px;"><br/><br/><div class="pointstext">FREE 6" SUB</div></div>';
            //str += '<div class="ui-block-c" style="padding-left:13px;"><span class="agebox_2" style="background: linear-gradient(to bottom, #ffffff 0%,#ffffff 95%,rgb(255,219,23) 5%,rgb(255,219,23) 100%);">15</span><img src="img/sub3.png" style="height:60px;width:auto;float:left;padding-left:12px;"><br/><br/><div class="pointstext">FREE 6" SUB & DRINK</div></div></div></div>';
            //str += '<div class="ui-block-d" style="padding-left:13px;"><span class="agebox_2" style="background: linear-gradient(to bottom, #ffffff 0%,#ffffff 95%,rgb(255,219,23) 5%,rgb(255,219,23) 100%);">20</span><img src="img/sub4.png" style="height:60px;width:auto;float:left;padding-left:12px;"><br/><br/><div class="pointstext">FREE 6" SUB, COOKIE & DRINK</div></div></div></div>';
            /*str += '<div class="ui-grid-c">';
             str+='<div class="ui-block-a"><span class="agebox_2" >Points:2.5<br/>Value:625</span><br/><div class="pointstext">0-25000</div></div>';
             str += '<div class="ui-block-b" ><span class="agebox_2" >Points:5<br/>Value:1875</span><br/><div class="pointstext">25001-50000</div></div>';
             str += '<div class="ui-block-c" ><span class="agebox_2" >Points:7<br/>Value:3625</span><br/><div class="pointstext">50001-75000</div></div>';
             str += '<div class="ui-block-d" ><span class="agebox_2" >Points:10<br/>Value:6125</span><br/><div class="pointstext">75001-100000</div></div>';
             str +='</div>';*/
            /*str += '<div class="ui-grid-a">';
             str +='<div class="ui-block-a"><span class="agebox_2" >Points:2.5<br/>Value:625</span><br/><div class="pointstext">0-25000</div></div>';
             str +='<div class="ui-block-b" ><span class="agebox_2" >Points:5<br/>Value:1875</span><br/><div class="pointstext">25001-50000</div></div>';
             str +='</div>';
             str += '<div class="ui-grid-a">';
             str += '<div class="ui-block-a" ><span class="agebox_2" >Points:7<br/>Value:3625</span><br/><div class="pointstext">50001-75000</div></div>';
             str += '<div class="ui-block-b" ><span class="agebox_2" >Points:10<br/>Value:6125</span><br/><div class="pointstext">75001-100000</div></div>';
             str +='</div>';
             str +='<br/><div class="pointsget">1 Point=1 Rs</div>';
             str +='<br/><div class="pointsget">Birthday offer: Get 5% OFF on purchase of 10000 & above</div>';*/
            str += '<div style="background:rgba(0,0,0,0.7);">';
            str += '<table data-role="table" id="movie-table" data-mode="reflow11">';
            str += '<tr><th data-priority="1" style="background-color: #943993;opacity:0.7;">Purchase Value Rs 0-25000</th></tr>';
            str += '<tr><th data-priority="2">Earn 2.5 Points per RS 100</th></tr>';
            str += '<tr><th data-priority="3">Voucher Eligibility: Get Voucher Worth RS 625</th></tr>';
            str += '</table>';
            str += '</div><br/>';
            str += '<div style="background:rgba(0,0,0,0.7);">';
            str += '<table data-role="table" id="movie-table" data-mode="reflow11">';
            str += '<tr><th data-priority="1" style="background-color: #943993;opacity:0.7;">Purchase Value Rs 25001-50000</th></tr>';
            str += '<tr><th data-priority="2">Earn 5 Points per RS 100</th></tr>';
            str += '<tr><th data-priority="3">Voucher Eligibility: Get Voucher Worth RS 1875</th></tr>';
            str += '</table>';
            str += '</div><br/>';
            str += '<div style="background:rgba(0,0,0,0.7);">';
            str += '<table data-role="table" id="movie-table" data-mode="reflow11">';
            str += '<tr><th data-priority="1" style="background-color: #943993;opacity:0.7;">Purchase Value Rs 50001-75000</th></tr>';
            str += '<tr><th data-priority="2">Earn 7 Points per RS 100</th></tr>';
            str += '<tr><th data-priority="3">Voucher Eligibility: Get Voucher Worth RS 3625</th></tr>';
            str += '</table>';
            str += '</div><br/>';
            str += '<div style="background:rgba(0,0,0,0.7);">';
            str += '<table data-role="table" id="movie-table" data-mode="reflow11">';
            str += '<tr><th data-priority="1" style="background-color: #943993;opacity:0.7;">Purchase Value Rs 75001-100000</th></tr>';
            str += '<tr><th data-priority="2">Earn 10 Points per RS 100</th></tr>';
            str += '<tr><th data-priority="3">Voucher Eligibility: Get Voucher Worth RS 6125</th></tr>';
            str += '</table>';
            str += '</div><br/>';
            str += '<div style="background:rgba(0,0,0,0.7);">';
            str += '<div class="pointsget">Birthday offer: Get 5% OFF on purchase of 10000 & above</div>';
            str += '</div>';


            /*for(var i=0;i<json.data.length;i++)
             
             {
             
             str += '<ul data-role="listview" data-inset="true" class="listPpup ui-listview ui-listview-inset ui-corner-all ui-shadow" data-icon="false">';
             str += '<li class="ui-li-has-thumb ui-first-child ui-last-child"><a href="#" class="ui-btn"><img src="img/rstar.jpg"/>';
             str += '<h2>'+json.data[i].offername+'</h2><p>Coupon Code : '+json.data[i].couponcode+'</p></a>';
             str += '</li></ul>';
             
             
             }*/
            document.getElementById("showmore11").innerHTML = str;
            //$("#" + pageID + " .ui-content").html(str);
            break;
        case 'news':

            str += '<div class="whitecontent"><div style="text-align: center;"><span>PRESS RELEASES</span><br/><span><img src="img/g_line.jpg"></span><br/></div>';
            str += '</div>';
            str += '<div class="ui-grid-solo msg_cont1">';
            console.log(JSON.stringify(json));

            for (var i = 0; i < json.length; i++)
            {

                if (json[i].articleurl != '')
                {
                    console.log(json[i].title);
                    str += '<div class="whitecontent">';
                    str += '<div class="ui-grid-solo">';
                    str += '<div class="flt_rght"> <span><a href="javascript:shareMessage(\'' + json[i].title + '\');" data-role="button"><img src="img/msg_share.png"></a></span></div>';
                    str += '<span class="sub1headernews">' + json[i].title + '</span><br/><span class="sub1headernews1">Updated on:' + json[i].pubdate + '</span><HR><br/><span class="paratxtsocial">';

                    str += '<img src="' + json[i].contentimage + '" style="width: 100%;"/><br/>';
                    str += '</span><br/><div id="news' + i + '"><a href=\"javascript:opennewsdetail(' + i + ');\"><span class="read-more">More....</span></a></div>';
                    //alert(json[i].content);
                    json[i].content = json[i].content.replace("[caption", "<p");
                    json[i].content = json[i].content.replace("[/caption", "</p");
                    json[i].content = json[i].content.replace("]", ">");
                    str += '<br/><div id="newsdetail' + i + '" style="display:none;"><span class="paratxtsocial">' + json[i].content + '</span></div>';
                    str += '</div></div>';


                }
            }

            str += '</div>';


            $("#" + pageID + " .ui-content").html(str);
            break;
        case 'collections':
            console.log("incollections" + JSON.stringify(json));
            var str1 = '';
            var str2 = '';
            for (var i = 0; i < json.length; i++)
            {
                if (json[i].type == 'video')
                {
                    str2 += '<div class="ui-grid-solo nomp">';

                    str2 += '<div class="ui-block nomp"><div class="ui-bar">'

                    str2 += '<iframe src="' + json[i].contentimage + '" width="92%" height="300px"  frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div></div>';
                    str2 += '</div>';
                }

                if (json[i].type == 'image')
                {
                    if (i % 2 == 0)
                    {
                        str1 += '<div class="ui-grid-a nomp">';
                        str1 += '<div class="ui-block-a nomp"><div class="ui-bar-a">';
                        str1 += '<a href="javascript:showPopupimage(\'' + json[i].largeimage + '\');" data-rel="popup" data-position-to="window" data-transition="fade"><img src="' + json[i].contentimage + '" class="h_img"></a></div></div>';
                        //#popupPhotoPortrait  
                    }
                    else if (i % 2 != 0)
                    {
                        str1 += '<div class="ui-block-b nomp"><div class="ui-bar-a">';
                        str1 += '<a href="javascript:showPopupimage(\'' + json[i].largeimage + '\');" data-rel="popup" data-position-to="window" data-transition="fade"><img src="' + json[i].contentimage + '" class="h_img"></a></div></div>';
                        str1 += '</div>';
                    }
                }

            }


            $("#galimg").html(str1);
            $("#galvid").html(str2);
            break;
			
			case 'Directory':
			
			str = '';
            var j=0;
		    for (var i = 0; i < json.data.length; i++)
			{
			   
			          bi = '';
					  bi = json.data[i].brandid;

			//console.log("ffffffff"+JSON.stringify(json.data[i]));
			
			document.getElementById("dirlogo"+(i+1)).src= json.data[i].brandlogo;
			document.getElementById("dircaption"+(i+1)).innerHTML=json.data[i].brandname;
			if(json.data[i].brandlogo=='' || json.data[i].brandlogo== 'undefined' ||json.data[i].brandlogo=='null' ||json.data[i].brandlogo==null){
				document.getElementById("dirlogo"+(i+1)).src= 'images/banner/logo.jpg';
			}
			try{
				$('#blankdirarea'+i).css('background-color','#ffffff');
			}catch(err){ }
			try{
				$('#dircaption'+(i+1)).css('background-color','#ec0675');
			}catch(err){ }
			//alert("1");
				$('#dirlogo'+(i+1)).click( createCallback(bi,json,i,pageID) );
			}
			
			break;
			

			case 'HealthWellness':
			str = '';
            console.log("ffffffff"+JSON.stringify(json));


		   for (var i = 0; i < json.data.length; i++)
					{
			          bi = '';
					  bi = json.data[i].brandid;
						
						var timing;

						if(json.data[i].opening_time_hour==null || json.data[i].opening_time_hour=='null')
						{
								timing='';
						}
						else
						{
							if(json.data[i].opening_time_min<10)
								{
											json.data[i].opening_time_min= '0'+json.data[i].opening_time_min;
								}
							if(json.data[i].closing_time_min<10)
								{
											json.data[i].closing_time_min= '0'+json.data[i].closing_time_min;
								}
							  	  
							var optiming= json.data[i].opening_time_hour+':'+json.data[i].opening_time_min+' '+json.data[i].opening_time_int;
							var cltiming= json.data[i].closing_time_hour+':'+json.data[i].closing_time_min+' '+json.data[i].closing_time_int;
							timing= optiming+'-'+cltiming;
						
						}
					   
					   if(json.data[i].block=='' || json.data[i].block== 'undefined' ||json.data[i].block=='null' ||json.data[i].block==null)
						{
									
							  json.data[i].block='';
						}

					   var bcon='';
					   
					   if(json.data[i].brandcontent!=null)
						    bcon=json.data[i].brandcontent.replace(new RegExp('\'', 'g'), '');
						
					   if(json.data[i].floor_image=='undefined' || json.data[i].floor_image=='null' || json.data[i].floor_image==null)
						   json.data[i].floor_image='';

			            $('#bl_fb'+(i+1)).attr('href','javascript:showBrandDetail(\''+bi+'\' ,\''+ pageID+'\' ,\''+ json.data[i].brandname+'\' ,\''+ bcon+'\' ,\''+ json.data[i].brandfloor+'\' ,\''+ json.data[i].brandlogo+'\',\''+ json.data[i].block+'\' ,\''+ timing+'\',\''+ json.data[i].brandshopno+'\',\''+ json.data[i].brandcontactperson+'\',\''+ json.data[i].brandcontactnumber+'\',\''+ json.data[i].menuImage1+'\',\''+ json.data[i].menuImage2+'\',\''+ json.data[i].menuImage3+'\',\''+ json.data[i].menuImage4+'\',\''+ json.data[i].menuImage5+'\',\''+ json.data[i].restaurantImage1+'\',\''+ json.data[i].restaurantImage2+'\',\''+ json.data[i].restaurantImage3+'\',\''+ json.data[i].restaurantImage4+'\',\''+ json.data[i].restaurantImage5+'\',\''+ json.data[i].floor_image+'\');');

			
			
			document.getElementById("htlogo"+(i+1)).src= json.data[i].brandlogo;
			document.getElementById("htcaption"+(i+1)).innerHTML=json.data[i].brandname;
			if(json.data[i].brandlogo=='' || json.data[i].brandlogo== 'undefined' ||json.data[i].brandlogo=='null' ||json.data[i].brandlogo==null){
				document.getElementById("htlogo"+(i+1)).src= 'images/banner/logo.jpg';
			}
			try{
			$('#blankhtarea'+i).css('background-color','#ffffff');
			}catch(err){ }
			try{
			$('#htcaption'+(i+1)).css('background-color','#ec0675');
			}catch(err){ }
			//alert("2");
			$('#htlogo'+(i+1)).click( createCallback(bi,json,i,pageID) );
			}

			// hiding blank divs

			for (var i = json.data.length; i < 84; i++)
			{ 
				document.getElementById("htlogo"+(i+1)).src= 'images/banner/blank.jpg';
				document.getElementById("htcaption"+(i+1)).innerHTML='';
				$('#blankhtarea'+(i+1)).css('display','none');
			
			}
				break;
				/*case 'attractions_skydeck':
					for (var i = 0; i < json.data.length; i++)
					{
				
			          bi = '';
					  bi = json.data[i].brandid;
				 console.log("ffffffff"+JSON.stringify(json.data[i]));
				if(json.data[i].brandname=='SkyDeck')
						{
			    createCallback1(bi,i,pageID);
						}
					}
				break;*/
				case 'PVR_Entertainment':
					str = '';


            console.log("ffffffff"+JSON.stringify(json));
		   for (var i = 0; i < json.data.length; i++)
					{
			          bi = '';
					  bi = json.data[i].brandid;

			
			
			document.getElementById("pvrlogo"+(i+1)).src= json.data[i].brandlogo;
			document.getElementById("pvrcaption"+(i+1)).innerHTML=json.data[i].brandname;
			if(json.data[i].brandlogo=='' || json.data[i].brandlogo== 'undefined' ||json.data[i].brandlogo=='null' ||json.data[i].brandlogo==null){
				document.getElementById("pvrlogo"+(i+1)).src= 'images/banner/logo.jpg';
			}
			try{
			$('#blankpvrarea'+i).css('background-color','#ffffff');
			}catch(err){ }
			try{
			$('#pvrcaption'+(i+1)).css('background-color','#ec0675');
			}catch(err){ }
			//alert("3");
			$('#pvrlogo'+(i+1)).click( createCallback(bi,json,i,pageID) );
			}

			// hiding blank divs

			for (var i = json.data.length; i < 84; i++)
			{ 
				document.getElementById("pvrlogo"+(i+1)).src= 'images/banner/blank.jpg';
				document.getElementById("pvrcaption"+(i+1)).innerHTML='';
				$('#blankpvrarea'+(i+1)).css('display','none');
			
			}
					break;
			case 'attractions':
			
					str = '';
            console.log("ffffffff"+JSON.stringify(json));
		    for (var i = 0; i < json.data.length; i++)
					{
			          bi = '';
					  bi = json.data[i].brandid;

			
			
			document.getElementById("atlogo"+(i+1)).src= json.data[i].brandlogo;
			document.getElementById("atcaption"+(i+1)).innerHTML=json.data[i].brandname;
			if(json.data[i].brandlogo=='' || json.data[i].brandlogo== 'undefined' ||json.data[i].brandlogo=='null' ||json.data[i].brandlogo==null){
				document.getElementById("atlogo"+(i+1)).src= 'images/banner/logo.jpg';
			}
			try{
			$('#blankatarea'+i).css('background-color','#ffffff');
			}catch(err){ }
			try{
			$('#atcaption'+(i+1)).css('background-color','#ec0675');
			}catch(err){ }
			//alert("4");
			$('#atlogo'+(i+1)).click( createCallback(bi,json,i,pageID) );
			}

			// hiding blank divs

			for (var i = json.data.length; i < 84; i++)
			{ 
				document.getElementById("atlogo"+(i+1)).src= 'images/banner/blank.jpg';
				document.getElementById("atcaption"+(i+1)).innerHTML='';
				$('#blankatarea'+(i+1)).css('display','none');
			
			}
			break;
			case 'foodbox':
			
					str = '';
            console.log("ffffffff"+JSON.stringify(json));
		   for (var i = 0; i < json.data.length; i++)
					{
			          bi = '';
					  bi = json.data[i].brandid;
						
						var timing;

						if(json.data[i].opening_time_hour==null || json.data[i].opening_time_hour=='null')
						{
								timing='';
						}
						else
						{
							if(json.data[i].opening_time_min<10)
								{
											json.data[i].opening_time_min= '0'+json.data[i].opening_time_min;
								}
							if(json.data[i].closing_time_min<10)
								{
											json.data[i].closing_time_min= '0'+json.data[i].closing_time_min;
								}
							  	  
							var optiming= json.data[i].opening_time_hour+':'+json.data[i].opening_time_min+' '+json.data[i].opening_time_int;
							var cltiming= json.data[i].closing_time_hour+':'+json.data[i].closing_time_min+' '+json.data[i].closing_time_int;
							timing= optiming+'-'+cltiming;
						
						}
					   
					   if(json.data[i].block=='' || json.data[i].block== 'undefined' ||json.data[i].block=='null' ||json.data[i].block==null)
						{
									
							  json.data[i].block='';
						}

					   var bcon='';
					   
					   if(json.data[i].brandcontent!=null)
						    bcon=json.data[i].brandcontent.replace(new RegExp('\'', 'g'), '');
						
					   if(json.data[i].floor_image=='undefined' || json.data[i].floor_image=='null' || json.data[i].floor_image==null)
						   json.data[i].floor_image='';

			            $('#bl_fb'+(i+1)).attr('href','javascript:showBrandDetail(\''+bi+'\' ,\''+ pageID+'\' ,\''+ json.data[i].brandname+'\' ,\''+ bcon+'\' ,\''+ json.data[i].brandfloor+'\' ,\''+ json.data[i].brandlogo+'\',\''+ json.data[i].block+'\' ,\''+ timing+'\',\''+ json.data[i].brandshopno+'\',\''+ json.data[i].brandcontactperson+'\',\''+ json.data[i].brandcontactnumber+'\',\''+ json.data[i].menuImage1+'\',\''+ json.data[i].menuImage2+'\',\''+ json.data[i].menuImage3+'\',\''+ json.data[i].menuImage4+'\',\''+ json.data[i].menuImage5+'\',\''+ json.data[i].restaurantImage1+'\',\''+ json.data[i].restaurantImage2+'\',\''+ json.data[i].restaurantImage3+'\',\''+ json.data[i].restaurantImage4+'\',\''+ json.data[i].restaurantImage5+'\',\''+ json.data[i].floor_image+'\');');


			
			
			document.getElementById("fblogo"+(i+1)).src= json.data[i].brandlogo;
			document.getElementById("fbcaption"+(i+1)).innerHTML=json.data[i].brandname;
			if(json.data[i].brandlogo=='' || json.data[i].brandlogo== 'undefined' ||json.data[i].brandlogo=='null' ||json.data[i].brandlogo==null){
				document.getElementById("fblogo"+(i+1)).src= 'images/banner/logo.jpg';
			}
			try{
			$('#blankarea'+i).css('background-color','#ffffff');
			}catch(err){ }
			try{
			$('#fbcaption'+(i+1)).css('background-color','#ec0675');
			}catch(err){ }
			//alert("5");
		//	$('#fblogo'+(i+1)).click( createCallback(bi,json,i,pageID) );
			}

			// hiding blank divs

			for (var i = json.data.length; i < 84; i++)
			{ 
				document.getElementById("fblogo"+(i+1)).src= 'images/banner/blank.jpg';
				document.getElementById("fbcaption"+(i+1)).innerHTML='';
				$('#blankarea'+(i+1)).css('display','none');
			
			}
			break;

			case 'finedining':
			
			str = '';
            console.log("ffffffff"+JSON.stringify(json));

		    for (var i = 0; i < json.data.length; i++)
					{
			          bi = '';
					  bi = json.data[i].brandid;
						
						var timing;

						if(json.data[i].opening_time_hour==null || json.data[i].opening_time_hour=='null')
						{
								timing='';
						}
						else
						{
							if(json.data[i].opening_time_min<10)
								{
											json.data[i].opening_time_min= '0'+json.data[i].opening_time_min;
								}
							if(json.data[i].closing_time_min<10)
								{
											json.data[i].closing_time_min= '0'+json.data[i].closing_time_min;
								}
							  	  
							var optiming= json.data[i].opening_time_hour+':'+json.data[i].opening_time_min+' '+json.data[i].opening_time_int;
							var cltiming= json.data[i].closing_time_hour+':'+json.data[i].closing_time_min+' '+json.data[i].closing_time_int;
							timing= optiming+'-'+cltiming;
						
						}
					   
					   if(json.data[i].block=='' || json.data[i].block== 'undefined' ||json.data[i].block=='null' ||json.data[i].block==null)
						{
									
							  json.data[i].block='';
						}

					   var bcon='';
					   
					   if(json.data[i].brandcontent!=null)
					   bcon=json.data[i].brandcontent.replace(new RegExp('\'', 'g'), '');
						
						if(json.data[i].floor_image=='undefined' || json.data[i].floor_image=='null' || json.data[i].floor_image==null)
						   json.data[i].floor_image='';

			            $('#bl_fd'+(i+1)).attr('href','javascript:showBrandDetail(\''+bi+'\' ,\''+ pageID+'\' ,\''+ json.data[i].brandname+'\' ,\''+ bcon+'\' ,\''+ json.data[i].brandfloor+'\' ,\''+ json.data[i].brandlogo+'\',\''+ json.data[i].block+'\' ,\''+ timing+'\',\''+ json.data[i].brandshopno+'\',\''+ json.data[i].brandcontactperson+'\',\''+ json.data[i].brandcontactnumber+'\',\''+ json.data[i].menuImage1+'\',\''+ json.data[i].menuImage2+'\',\''+ json.data[i].menuImage3+'\',\''+ json.data[i].menuImage4+'\',\''+ json.data[i].menuImage5+'\',\''+ json.data[i].restaurantImage1+'\',\''+ json.data[i].restaurantImage2+'\',\''+ json.data[i].restaurantImage3+'\',\''+ json.data[i].restaurantImage4+'\',\''+ json.data[i].restaurantImage5+'\',\''+ json.data[i].floor_image+'\');');


			
			
			document.getElementById("fdlogo"+(i+1)).src= json.data[i].brandlogo;
			document.getElementById("fdcaption"+(i+1)).innerHTML=json.data[i].brandname;
			if(json.data[i].brandlogo=='' || json.data[i].brandlogo== 'undefined' ||json.data[i].brandlogo=='null' ||json.data[i].brandlogo==null){
				document.getElementById("fdlogo"+(i+1)).src= 'images/banner/logo.jpg';
			}
			try{
			$('#blankfdarea'+i).css('background-color','#ffffff');
			}catch(err){ }
			try{
			$('#fdcaption'+(i+1)).css('background-color','#ec0675');
			}catch(err){ }
			//alert("5");
		//	$('#fblogo'+(i+1)).click( createCallback(bi,json,i,pageID) );
			}

			// hiding blank divs

			for (var i = json.data.length; i < 84; i++)
			{ 
				document.getElementById("fdlogo"+(i+1)).src= 'images/banner/blank.jpg';
				document.getElementById("fdcaption"+(i+1)).innerHTML='';
				$('#blankfdarea'+(i+1)).css('display','none');
			
			}
			break;

			case 'shopping':
			
					str = '';
            console.log("ffffffff"+JSON.stringify(json));
		   for (var i = 0; i < json.data.length; i++)
		   {
			          $('#blanksharea'+(i+1)).css('display','block');
			          bi = '';
					  bi = json.data[i].brandid;

                      var timing;

						if(json.data[i].opening_time_hour==null || json.data[i].opening_time_hour=='null')
						{
								timing='';
						}
						else
						{
							if(json.data[i].opening_time_min<10)
								{
											json.data[i].opening_time_min= '0'+json.data[i].opening_time_min;
								}
							if(json.data[i].closing_time_min<10)
								{
											json.data[i].closing_time_min= '0'+json.data[i].closing_time_min;
								}
							  	  
							var optiming= json.data[i].opening_time_hour+':'+json.data[i].opening_time_min+' '+json.data[i].opening_time_int;
							var cltiming= json.data[i].closing_time_hour+':'+json.data[i].closing_time_min+' '+json.data[i].closing_time_int;
							timing= optiming+'-'+cltiming;
						
						}
					   
					   if(json.data[i].block=='' || json.data[i].block== 'undefined' ||json.data[i].block=='null' ||json.data[i].block==null)
						{
									
							  json.data[i].block='';
						}

					   var bcon='';
					   
					   if(json.data[i].brandcontent!=null)
					   bcon=json.data[i].brandcontent.replace(new RegExp('\'', 'g'), '');

				if(json.data[i].floor_image=='undefined' || json.data[i].floor_image=='null' || json.data[i].floor_image==null)
						   json.data[i].floor_image='';

			$('#bl_women'+(i+1)).attr('href','javascript:showBrandDetail(\''+bi+'\' ,\''+ pageID+'\' ,\''+ json.data[i].brandname+'\' ,\''+ bcon+'\' ,\''+ json.data[i].brandfloor+'\' ,\''+ json.data[i].brandlogo+'\',\''+ json.data[i].block+'\' ,\''+ timing+'\',\''+ json.data[i].brandshopno+'\',\''+ json.data[i].brandcontactperson+'\',\''+ json.data[i].brandcontactnumber+'\',\''+ json.data[i].menuImage1+'\',\''+ json.data[i].menuImage2+'\',\''+ json.data[i].menuImage3+'\',\''+ json.data[i].menuImage4+'\',\''+ json.data[i].menuImage5+'\',\''+ json.data[i].restaurantImage1+'\',\''+ json.data[i].restaurantImage2+'\',\''+ json.data[i].restaurantImage3+'\',\''+ json.data[i].restaurantImage4+'\',\''+ json.data[i].restaurantImage5+'\',\''+ json.data[i].floor_image+'\');');
			
			document.getElementById("shlogo"+(i+1)).src= json.data[i].brandlogo;
			document.getElementById("shcaption"+(i+1)).innerHTML=json.data[i].brandname;
			if(json.data[i].brandlogo=='' || json.data[i].brandlogo== 'undefined' ||json.data[i].brandlogo=='null' ||json.data[i].brandlogo==null){
				document.getElementById("shlogo"+(i+1)).src= 'images/banner/logo.jpg';
			}
			try{
			$('#blanksharea'+i).css('background-color','#ffffff');
			}catch(err){ }
			try{
			$('#shcaption'+(i+1)).css('background-color','#ec0675');
			}catch(err){ }
			//alert("6");
			//$('#shlogo'+(i+1)).click( createCallback(bi,json,i,pageID) );
			}
			
			// hiding blank divs

			for (var i = json.data.length; i < 84; i++)
			{ 
				document.getElementById("shlogo"+(i+1)).src= 'images/banner/blank.jpg';
				document.getElementById("shcaption"+(i+1)).innerHTML='';
				$('#blanksharea'+(i+1)).css('display','none');
			
			}
			break;

			case 'events':
			
					str = '';
            console.log("ffffffff"+JSON.stringify(json));
		   for (var i = 0; i < json.data.length; i++)
					{
			         // bi = '';
					 // bi = json.data[i].brandid;

			
			
			document.getElementById("evtlogo"+(i+1)).src= 'http://180.179.221.93/trimages/events/'+json.data[i].image;
			document.getElementById("evtcaption"+(i+1)).innerHTML=json.data[i].title;
			if(json.data[i].image=='' || json.data[i].image== 'undefined' ||json.data[i].image=='null' ||json.data[i].image==null){
				document.getElementById("evtlogo"+(i+1)).src= 'images/banner/logo.jpg';
			}

			document.getElementById("evtcaptionDate"+(i+1)).innerHTML=json.data[i].eveDate;

			
			try{
			$('#blankareaevt'+i).css('background-color','#ffffff');
			}catch(err){ }
			try{
			$('#evtcaption'+(i+1)).css('background-color','#ec0675');
			}catch(err){ }
			//alert("7");
			$('#evtlogo'+(i+1)).click( createCallbackev(json,i));
			}
			break;

    }
}
function resetPage()
{

	for (var i=1;i<84;i=i+2 )
	{
		
		document.getElementById("fblogo"+(i+1)).src= 'images/banner/logo.jpg';
        document.getElementById("fblogo"+(i)).src= 'images/banner/blank.jpg';
		document.getElementById("fbcaption"+(i+1)).innerHTML='';
		document.getElementById("fbcaption"+(i)).innerHTML='';
		try{
		$( "#fblogo"+i).unbind( "click" );
		}catch(err){ }
		try{
		$('#blankarea'+i).css('background-color','#f7f7f7');
		}catch(err){ }
		try{
			$('#fbcaption'+i).css('background-color','#f7f7f7');
			$('#fbcaption'+(i+1)).css('background-color','#f7f7f7');
			}catch(err){ }

		document.getElementById("htlogo"+(i+1)).src= 'images/banner/logo.jpg';
        document.getElementById("htlogo"+(i)).src= 'images/banner/blank.jpg';
		document.getElementById("htcaption"+(i+1)).innerHTML='';
		document.getElementById("htcaption"+(i)).innerHTML='';
		try{
		$( "#htlogo"+i).unbind( "click" );
		}catch(err){ }
		try{
		$('#blankhtarea'+i).css('background-color','#f7f7f7');
		}catch(err){ }
		try{
			$('#htcaption'+i).css('background-color','#f7f7f7');
			$('#htcaption'+(i+1)).css('background-color','#f7f7f7');
			}catch(err){ }

		document.getElementById("fdlogo"+(i+1)).src= 'images/banner/logo.jpg';
        document.getElementById("fdlogo"+(i)).src= 'images/banner/blank.jpg';
		document.getElementById("fdcaption"+(i+1)).innerHTML='';
		document.getElementById("fdcaption"+(i)).innerHTML='';
		try{
		$( "#fdlogo"+i).unbind( "click" );
		}catch(err){ }
		try{
		$('#blankfdarea'+i).css('background-color','#f7f7f7');
		}catch(err){ }
		try{
			$('#fdcaption'+i).css('background-color','#f7f7f7');
			$('#fdcaption'+(i+1)).css('background-color','#f7f7f7');
			}catch(err){ }

		document.getElementById("shlogo"+(i+1)).src= 'images/banner/logo.jpg';
        document.getElementById("shlogo"+(i)).src= 'images/banner/blank.jpg';
		document.getElementById("shcaption"+(i+1)).innerHTML='';
		document.getElementById("shcaption"+(i)).innerHTML='';
		
		try{
		$( "#shlogo"+i).unbind( "click" );
		}catch(err){ }
		try{
			$('#shcaption'+i).css('background-color','#f7f7f7');
			$('#shcaption'+(i+1)).css('background-color','#f7f7f7');
			}catch(err){ }
		try{
		$('#blanksharea'+i).css('background-color','#f7f7f7');
		}catch(err){ }


		document.getElementById("atlogo"+(i+1)).src= 'images/banner/logo.jpg';
        document.getElementById("atlogo"+(i)).src= 'images/banner/blank.jpg';
		document.getElementById("atcaption"+(i+1)).innerHTML='';
		document.getElementById("atcaption"+(i)).innerHTML='';
		
		try{
		$( "#atlogo"+i).unbind( "click" );
		}catch(err){ }
		try{
			$('#atcaption'+i).css('background-color','#f7f7f7');
			$('#atcaption'+(i+1)).css('background-color','#f7f7f7');
			}catch(err){ }
		try{
		$('#blankatarea'+i).css('background-color','#f7f7f7');
		}catch(err){ }

		document.getElementById("pvrlogo"+(i+1)).src= 'images/banner/logo.jpg';
        document.getElementById("pvrlogo"+(i)).src= 'images/banner/blank.jpg';
		document.getElementById("pvrcaption"+(i+1)).innerHTML='';
		document.getElementById("pvrcaption"+(i)).innerHTML='';
		
		try{
		$( "#pvrlogo"+i).unbind( "click" );
		}catch(err){ }
		try{
			$('#pvrcaption'+i).css('background-color','#f7f7f7');
			$('#pvrcaption'+(i+1)).css('background-color','#f7f7f7');
			}catch(err){ }
		try{
		$('#blankpvrarea'+i).css('background-color','#f7f7f7');
		}catch(err){ }

		
	}

	for (var i=1;i<108;i=i+2 )
	{
		
		document.getElementById("dirlogo"+(i+1)).src= 'images/banner/logo.jpg';
        document.getElementById("dirlogo"+(i)).src= 'images/banner/blank.jpg';
		document.getElementById("dircaption"+(i+1)).innerHTML='';
		document.getElementById("dircaption"+(i)).innerHTML='';
		
		try{
		$( "#dirlogo"+i).unbind( "click" );
		}catch(err){ }
		try{
		$('#blankdirarea'+i).css('background-color','#f7f7f7');
		}catch(err){ }
		try{
			$('#dircaption'+i).css('background-color','#f7f7f7');
			$('#dircaption'+(i+1)).css('background-color','#f7f7f7');
			}catch(err){ }
	}
	for (var i=1;i<28;i=i+2 )
	{
		
		document.getElementById("evtlogo"+(i+1)).src= 'images/banner/logo.jpg';
        document.getElementById("evtlogo"+(i)).src= 'images/banner/blank.jpg';
		document.getElementById("evtcaption"+(i+1)).innerHTML='';
		document.getElementById("evtcaption"+(i)).innerHTML='';
		try{
		$( "#evtlogo"+i).unbind( "click" );
		}catch(err){ }
		try{
		$('#blankareaevt'+i).css('background-color','#f7f7f7');
		}catch(err){ }
		try{
			$('#evtcaption'+i).css('background-color','#f7f7f7');
			$('#evtcaption'+(i+1)).css('background-color','#f7f7f7');
			}catch(err){ }
	}

	
}

function createCallback2(str){
  return function(){
  if(str=='The Hive')
	{
	  $.mobile.changePage("#OfficeHotels",{transition: "slide"});
	}
  else if(str=='Waverly')
	{
	  $.mobile.changePage("#HotelsOffice",{transition: "slide"});
	}
  }
 
}
function createCallback1(bi,i,cat){
 try{
   var json=JSON.parse(localStorage.getItem(cat+'brands'));

   var timing;

						if(json.data[i].opening_time_hour==null || json.data[i].opening_time_hour=='null')
						{
								timing='';
						}
						else
						{
							if(json.data[i].opening_time_min<10)
								{
											json.data[i].opening_time_min= '0'+json.data[i].opening_time_min;
								}
							if(json.data[i].closing_time_min<10)
								{
											json.data[i].closing_time_min= '0'+json.data[i].closing_time_min;
								}
							  	  
							var optiming= json.data[i].opening_time_hour+':'+json.data[i].opening_time_min+' '+json.data[i].opening_time_int;
							var cltiming= json.data[i].closing_time_hour+':'+json.data[i].closing_time_min+' '+json.data[i].closing_time_int;
							timing= optiming+'-'+cltiming;
						
						}
					   
					   if(json.data[i].block=='' || json.data[i].block== 'undefined' ||json.data[i].block=='null' ||json.data[i].block==null)
						{
									
							  json.data[i].block='';
						}
						if(json.data[i].floor_image=='undefined' || json.data[i].floor_image=='null' || json.data[i].floor_image==null)
						{
						     json.data[i].floor_image='';
						}

   showBrandDetail(bi , cat , json.data[i].brandname , json.data[i].brandcontent , json.data[i].brandfloor , json.data[i].brandlogo , json.data[i].block , timing, json.data[i].brandshopno, json.data[i].brandcontactperson, json.data[i].brandcontactnumber, json.data[i].menuImage1, json.data[i].menuImage2, json.data[i].menuImage3, json.data[i].menuImage4, json.data[i].menuImage5, json.data[i].restaurantImage1, json.data[i].restaurantImage2, json.data[i].restaurantImage3, json.data[i].restaurantImage4, json.data[i].restaurantImage5, json.data[i].floor_image);
 }catch(err){}  
 
}

function createCallback(bi,json,i,cat){
  return function(){

   var timing;

						if(json.data[i].opening_time_hour==null || json.data[i].opening_time_hour=='null')
						{
								timing='';
						}
						else
						{
							if(json.data[i].opening_time_min<10)
								{
											json.data[i].opening_time_min= '0'+json.data[i].opening_time_min;
								}
							if(json.data[i].closing_time_min<10)
								{
											json.data[i].closing_time_min= '0'+json.data[i].closing_time_min;
								}
							  	  
							var optiming= json.data[i].opening_time_hour+':'+json.data[i].opening_time_min+' '+json.data[i].opening_time_int;
							var cltiming= json.data[i].closing_time_hour+':'+json.data[i].closing_time_min+' '+json.data[i].closing_time_int;
							timing= optiming+'-'+cltiming;
						
						}
					   
					   if(json.data[i].block=='' || json.data[i].block== 'undefined' ||json.data[i].block=='null' ||json.data[i].block==null)
						{
									
							  json.data[i].block='';
						}
						if(json.data[i].floor_image=='undefined' || json.data[i].floor_image=='null' || json.data[i].floor_image==null)
						{
						     json.data[i].floor_image='';
						}
	//{"brandid":11,"brandname":"Toscano","brandcontent":"Toscano Restaurant & Wine Bar is a fine-dining Italian restaurant that offers an intimate yet vibrant atmosphere fusing the best of old and new world Italian cuisine.\r\n\r\nAn eclectic menu of gourmet pizzas, multi-course dinners & extensive range of wines enables the perfect pairing with your meal. Toscano strives to offer the same relentless signature perseverance for quality and excellence in all that we do.","brandlogo":"https://halwasiya.mloyalretail.com/Rewards/brands/toscano-logo.jpg","brandfloor":"Third Floor","brandshopno":"11","brandcontactperson":"","brandcontactnumber":"","categoryid":14}
	
   showBrandDetail(bi , cat , json.data[i].brandname , json.data[i].brandcontent , json.data[i].brandfloor , json.data[i].brandlogo , json.data[i].block , timing, json.data[i].brandshopno, json.data[i].brandcontactperson, json.data[i].brandcontactnumber, json.data[i].menuImage1, json.data[i].menuImage2, json.data[i].menuImage3, json.data[i].menuImage4, json.data[i].menuImage5, json.data[i].restaurantImage1, json.data[i].restaurantImage2, json.data[i].restaurantImage3, json.data[i].restaurantImage4, json.data[i].restaurantImage5, json.data[i].floor_image);
   
  }
}
function createCallbackev(json,i){
  return function(){
	
   showBrandDetailev(json.data[i].title , json.data[i].eveDate , json.data[i].timing , json.data[i].image,json.data[i].details);
   
  }
}

function showBrandDetail(bi , cat , brandname , brandcontent , brandfloor , brandlogo , brandblk, brandtime, brandshopno, brandcontactperson, brandcontactnumber, menuimage1, menuimage2, menuimage3, menuimage4, menuimage5, restaurantimage1, restaurantimage2, restaurantimage3, restaurantimage4, restaurantimage5, floorimage)
{
	console.log("Category: "+cat);
	
    if(brandlogo=='' || brandlogo=='null' || brandlogo==null || brandcontent=='undefined')
	   brandlogo='images/banner/logo.jpg';

	if(cat=='attractions')
	{
		if(brandcontent=='undefined' || brandcontent=='null' || brandcontent==null)
	    brandcontent = '';

		var bdetails = brandcontent.split("$");
		var b_ldesc = bdetails[0];
        
		$.mobile.changePage("#attractionsdetail",{transition: "slide"});
		document.getElementById("attrimg").innerHTML='<img src="'+brandlogo+'" class="img-resp mgn">';
		document.getElementById("attrtitle").innerHTML=brandname;
		document.getElementById("attrcontent").innerHTML='<p>'+b_ldesc+'</p><br/>'+menu_str+'<br/>';
	}
	else
	{
		if(brandcontent=='undefined' || brandcontent=='null' || brandcontent==null)
	    brandcontent = '';
        var menu_str = '';


		/* clearing previuos stored images for menu and restaurants */

		for(var i=1;i<=5;i++)
		{

				document.getElementById('photoimage'+i).src="images/banner/logo.jpg";
                document.getElementById('photoimagelink'+i).setAttribute("href", "images/banner/logo.jpg");        
   
   				
				document.getElementById('menuimage'+i).src="images/banner/logo.jpg";
                document.getElementById('menuimagelink'+i).setAttribute("href", "images/banner/logo.jpg");
           
		}

		/* clearing ends here */

		if(floorimage=='' || floorimage=='undefined' || floorimage=='null' || floorimage==null)
	    floorimage = brandlogo;

		var bdetails = brandcontent.split("$");
		var b_ldesc = bdetails[0];
		var b_timing = bdetails[1];
		var b_sdesc = bdetails[2];
		var b_feature = bdetails[3];
        var b_mdesc = bdetails[4];


		if(brandfloor=='' || brandfloor=='undefined' || brandfloor=='null' || brandfloor==null)
	    brandfloor = '';

		if(b_timing=='' || b_timing=='undefined' || b_timing=='null' || b_timing==null)
	    b_timing = 'Timing';

		if(b_sdesc=='' || b_sdesc=='undefined' || b_sdesc=='null' || b_sdesc==null)
	    b_sdesc = brandname;

		if(b_feature=='' || b_feature=='undefined' || b_feature=='null' || b_feature==null)
	    b_feature = 'Feature';
        if(b_mdesc=='' || b_mdesc=='undefined' || b_mdesc=='null' || b_mdesc==null)
	    b_mdesc = '';

		var b_feat = b_feature.split(":");
		    b_feature1 = b_feat[0];
			b_feature2 = b_feat[1];

		if(b_feature1=='' || b_feature1=='undefined' || b_feature1=='null' || b_feature1==null)
	    b_feature1 = '';
		if(b_feature2=='' || b_feature2=='undefined' || b_feature2=='null' || b_feature2==null)
	    b_feature2 = '';

		var strbftr ='<span style="font-weight:bold;">'+b_feature1+':</span><br><span>'+b_feature2+'</span>';
		    
        /*
        if(brandcontent.indexOf('Menu Available')>=0)
        {
            brandcontent = brandcontent.substring(0,brandcontent.indexOf('Menu Available'));
            menu_str = '<a href="javascript:showmenu(\''+bi+'\')">Click for Menu<\a>';
            
        }*/
		$.mobile.changePage("#fnb_fb_individual",{transition: "slide"});
		document.getElementById("fnb_fb_iProduct_img").innerHTML='<img src="'+brandlogo+'" class="productImgnew" alt="Image">';
        //document.getElementById("fnb_fb_iProduct_img1").innerHTML='<img src="'+floorimage+'" class="productImg" alt="Image">';
        document.getElementById("brand_text").innerHTML='<p class="paratxt1">'+b_ldesc+'</p>';

		if(checkforundefined(brandshopno)!='' && checkforundefined(brandshopno)!=brandfloor)
		{
			document.getElementById("brand_floor").innerHTML='<span>'+brandshopno+', '+brandfloor+'</span>';
		}
		else
		{
			document.getElementById("brand_floor").innerHTML='<span>'+brandfloor+'</span>';
		}

		if(checkforundefined(brandcontactperson)!='' && checkforundefined(brandcontactperson)!='null')
		{
			document.getElementById("brand_floor_mgr").innerHTML='<span>'+brandcontactperson+'</span>'
		}
		else
		{
			document.getElementByid("brand_floor_mgr").innerHTML='';
		}
		var bphone = brandcontactnumber.trim();
		bphonenew = bphone.split("/");
		bphone1 = bphonenew[0].trim();
		bphone2 = bphonenew[1].trim();

        console.log(brandlogo);
		if(checkforundefined(brandlogo)!='')
		{
		  if(brandlogo.indexOf("http://halwasiya.mloyalretail.com") >= 0)
			brandlogo.replace("http://halwasiya.mloyalretail.com","https://halwasiya.mloyalretail.com");
		}
		console.log('brandlogo2:'+brandlogo);
		if(brandfloor=='')
			document.getElementById("flrdiv").innerHTML='';
		else
			document.getElementById("flrdiv").innerHTML= 'span>'+brandfloor+'</span>';



        
		//document.getElementById("brand_floor").innerHTML='<span>Floor: '+brandfloor+'</span>';
		document.getElementById("brand_timing").innerHTML='<span>'+b_timing+'</span>';
		document.getElementById("sdecription").innerHTML='<span>'+b_sdesc+'</span>';
		document.getElementById("cuisines_spec").innerHTML='<span>'+strbftr+'</span>';
        document.getElementById("morebrand_desc").innerHTML='<p class="paratxt1">'+b_mdesc+'</p>';

        var bcall = brandcontactnumber.split('/');
        var brandphone = (bcall[0].trim());

		if(checkforundefined(brandphone)!='')
		{
			document.getElementById("brand_call").innerHTML='<a href="tel:'+brandphone+'" class="brand_inner_btn"><img src="images/call_icon.png" /><span>Call</span></a>';
		}

		document.getElementById("share_btn").innerHTML= '<img src="images/share_icon.png" onclick="javascript:shareBrand(\''+brandname+'\',\''+brandlogo+'\');" class="share_btn" />';

        var tbtn = document.getElementById("tbk_btn");
        
		if(cat=='shopping')
		{
			tbtn.style.display = 'none';
        }
		else if(cat=='PVR_Entertainment')
		{
			tbtn.style.display = 'none';
			//document.getElementById("tbk_btn_type").innerHTML= 'Book A Ticket';
		}
		else if(cat=='foodbox')
		{
			tbtn.style.display = 'none';
			//document.getElementById("tbk_btn_type").innerHTML= 'Book A Table';
		}
		else
		{
			tbtn.style.display = 'none';
			//document.getElementById("tbk_btn_type").innerHTML= 'Book A Table';
		}

        if((menuimage1=='' && menuimage2=='' && menuimage3=='' && menuimage4=='' && menuimage5=='') || menuimage1=='null' && menuimage2=='null' && menuimage3=='null' && menuimage4=='null' && menuimage5=='null')
        {
            
            var mainpop1 = document.getElementById("menublk");
            mainpop1.style.display = 'none';
            
        }
        else
        {
            var mainpop1 = document.getElementById("menublk");
            mainpop1.style.display = 'block';
        }
        if((restaurantimage1=='' && restaurantimage2=='' && restaurantimage3=='' && restaurantimage4=='' && restaurantimage5=='') || (restaurantimage1=='null' && restaurantimage2=='null' && restaurantimage3=='null' && restaurantimage4=='null' && restaurantimage5=='null'))
        {
            var mainpop1 = document.getElementById("photoblk");
            mainpop1.style.display = 'none';
        }
        else
        {
            var mainpop1 = document.getElementById("photoblk");
            mainpop1.style.display = 'block';
        }
		for(var i=1;i<=5;i++)
		{
	      
			if(('restaurantimage'+i)!=undefined &&  ('restaurantimage'+i)!=null && ('restaurantimage'+i)!='' && ('restaurantimage'+i)!='undefined' && ('restaurantimage'+i)!='null')
			{
               
				document.getElementById('photoimage'+i).src=eval('restaurantimage'+i);
                document.getElementById('photoimagelink'+i).setAttribute('href', eval('restaurantimage'+i));        
           
			}
            
            if(('menuimage'+i)!=undefined &&  ('menuimage'+i)!=null && ('menuimage'+i)!='' && ('menuimage'+i)!='undefined' && ('menuimage'+i)!='null')
			{
                
				document.getElementById('menuimage'+i).src=eval('menuimage'+i);
                document.getElementById('menuimagelink'+i).setAttribute('href', eval('menuimage'+i));
               
           
			}
            
		}
		

		
		//document.getElementById("fnb_fb_iProduct_floor").innerHTML='<div class="ui-block"><div class="ui-bar-a"><p class="paratxt"><span>'+brandname+'</span><br/><span>'+category_nm+'</span><br/><span>'+brandblk+'</span><br/><span>'+brandfloor+'</span><br/><span>'+brandtime+'</span></p></div></div>';
		//document.getElementById("fnb_iProduct_list").innerHTML='<div class="ui-block"><div class="ui-bar-a"><p class="paratxt1">'+brandcontent+'<br/><span style="text-align:center">'+menu_str+'</span></p><p class="paratxt2">Shop No: '+brandshopno+'<br/>Store Manager: '+brandcontactperson+'<br/>Contact No: '+brandcontactnumber+'</p></div></div>';
	}
}

function showBrandDetailev(title,evedate , timing , image , details)
{
	$.mobile.changePage("#eventdetails",{transition: "slide"});
	document.getElementById("eventtitlehead").innerHTML=title;
	document.getElementById("eventtitle").innerHTML=title;
	document.getElementById("eventdate").innerHTML=evedate;
	document.getElementById("eventtime").innerHTML=timing;
	document.getElementById("eventimage").innerHTML='<img src="http://www.ptg.pacificindia.in/images/events/'+image+'" class="img-resp mgn" >';
	document.getElementById("eventdetail").innerHTML=details;
} 
function showmenu(bi)
{
    alert(bi);
}
function renderTemplatedetail(pageID) {
    var str = '';



    switch (pageID) {

       case 'aboutus':
			
		    var uuu='';
			for(var i=0;i<user.id.length;i++)
		    {
             if(i%4==2)
				{
				 uuu = uuu + user.id.charAt(i) +'  ';
				}
			 else
				{
				 uuu = uuu + user.id.charAt(i);
				}
			}

			
			//var s1 = parseInt(user.balance);
			
			if(user.slabid_oneawadhcenter==1)
			{
				document.getElementById("mType").innerHTML='Shopping Enthusiast';
				document.getElementById("member_type").className += ' enthusiast_member';
			}
			else if(user.slabid_oneawadhcenter==2)
			{
				document.getElementById("mType").innerHTML='Shopping Lovers';
				document.getElementById("member_type").className += ' lovers_member';
			}
			else if(user.slabid_oneawadhcenter==3)
			{
				document.getElementById("mType").innerHTML='Shopaholics';
				document.getElementById("member_type").className += ' shopaholics_member';
			}

		    document.getElementById("cardid").innerHTML = uuu;
		    document.getElementById("valid").innerHTML = 'Valid Thru:'+user.validity;
			document.getElementById("tpoint").innerHTML = 'POINTS : ' +user.balance;
			document.getElementById("cardname").innerHTML=user.firstname+' '+user.lastname;
		
			break;
        case 'page-card':

            //document.getElementById("barcontent").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span><img src="img/pro_btn.png" class="mem_acc_icon"></span><a href="javascript:showLoyalty();"><span class="myacc">My Account</span></a>';
            //document.getElementById("welcomehome").innerHTML = 'Welcome '+user.firstname+' '+user.lastname;
            /*document.getElementById("cardname").innerHTML = user.firstname+' '+user.lastname;
             var uuu='';
             for(var i=0;i<user.id.length;i++)
             {
             if(i%4==2)
             {
             uuu = uuu + user.id.charAt(i) +'  ';
             }
             else
             {
             uuu = uuu + user.id.charAt(i);
             }
             }
             document.getElementById("cardid").innerHTML = uuu;
             document.getElementById("valid").innerHTML = 'Valid Thru:'+user.validity;
             var ustr = user.balance;
             var tstr = '';
             if(ustr.length<=8)
             {
             for (var k=0;k<(8-ustr.length); k++)
             {
             tstr += '<span class="bdrht" style="">0</span>';
             }
             }
             for (var j=0;j<ustr.length; j++)
             {
             tstr += '<span class="bdrht" style="">'+ustr.charAt(j)+'</span>';
             }
             
             document.getElementById("tpoint").innerHTML = tstr;
             document.getElementById("barimg").innerHTML = '<img src="http://delhidaredevilsadda.com/barcode.php?text='+user.mobile+'" style="padding:5px;border: solid 1px #ffffff;border-radius: 1px;background:#ffffff;" />';
             
             //document.getElementById("headername").innerHTML='Membership';*/

            break;




        case 'shop':
            str += '<ul data-role="listview" id="ul_shop" class="ul_shop" data-icon="false" data-iconpos="none">';
            str += '<li class="lt_shop" data-theme="a" data-icon="false" data-iconpos="none"><a href="javascript:showshoplinks(\'S1\');" class="lt_shop_a"><h2>Kurtas & Anarkalis</h2></a></li>';
            str += '<li class="lt_shop" data-theme="a" data-icon="false" data-iconpos="none"><a href="javascript:showshoplinks(\'S2\');" class="lt_shop_a"><h2>Pants & Skirts</h2></a></li>';
            str += '<li class="lt_shop" data-theme="a" data-icon="false" data-iconpos="none"><a href="javascript:showshoplinks(\'S3\');" class="lt_shop_a"><h2>Jackets & Waistcoats</h2></a></li>';
            str += '<li class="lt_shop" data-theme="a" data-icon="false" data-iconpos="none"><a href="javascript:showshoplinks(\'S4\');" class="lt_shop_a"><h2>Stoles & Dupattas</h2></a></li>';
            str += '<li class="lt_shop" data-theme="a" data-icon="false" data-iconpos="none"><a href="javascript:showshoplinks(\'S5\');" class="lt_shop_a"><h2>Tops</h2></a></li>';
            str += '<li class="lt_shop" data-theme="a" data-icon="false" data-iconpos="none"><a href="javascript:showshoplinks(\'S6\');" class="lt_shop_a"><h2>Jewelry</h2></a></li>';
            str += '<li class="lt_shop" data-theme="a" data-icon="false" data-iconpos="none"><a href="javascript:showshoplinks(\'S7\');" class="lt_shop_a"><h2>Home Decor</h2></a></li>';
            str += '</ul>';

            $("#" + pageID + " .ui-content").html(str);
            $('#ul_shop').listview();
            break;
        case 'popuppagecard':


            document.getElementById("cardnamepop").innerHTML = user.firstname + ' ' + user.lastname;
            var uuu = '';
            for (var i = 0; i < user.id.length; i++)
            {
                if (i % 4 == 2)
                {
                    uuu = uuu + user.id.charAt(i) + '  ';
                }
                else
                {
                    uuu = uuu + user.id.charAt(i);
                }
            }
            document.getElementById("cardidpop").innerHTML = uuu;
            document.getElementById("validpop").innerHTML = 'Valid Thru:' + user.validity;
            var ustr = user.balance;
            var tstr = '';
            if (ustr.length <= 8)
            {
                for (var k = 0; k < (8 - ustr.length); k++)
                {
                    tstr += '<span class="bdrht" style="">0</span>';
                }
            }
            for (var j = 0; j < ustr.length; j++)
            {
                tstr += '<span class="bdrht" style="">' + ustr.charAt(j) + '</span>';
            }

            document.getElementById("tpointpop").innerHTML = tstr;
            document.getElementById("barimgpop").innerHTML = '<img src="http://delhidaredevilsadda.com/barcode.php?text=' + user.mobile + '" style="padding:5px;border: solid 1px #ffffff;border-radius: 1px;background:#ffffff;" />';


            break;
			

    }
}



function likeMessage(msg, i)
{

    $('#liking' + i).html('<img src="img/msg_dn_down.png">');
    //document.getElementById('liking'+i).innerHTML='<a href="javascript:likeMessage(\''+json[i].msg+'\',\''+i+'\');" data-role="button"><img src="img/msg_share.png"></a>';
}

function likeMessage_coupons(msg, i)
{

    $('#likingcoupon' + i).html('<img src="img/msg_dn_down.png">');
    //document.getElementById('liking'+i).innerHTML='<a href="javascript:likeMessage(\''+json[i].msg+'\',\''+i+'\');" data-role="button"><img src="img/msg_share.png"></a>';
}

function likeMessage_loyalty(msg, i)
{

    $('#likingloyalty' + i).html('<img src="img/msg_dn_down.png">');
    //document.getElementById('liking'+i).innerHTML='<a href="javascript:likeMessage(\''+json[i].msg+'\',\''+i+'\');" data-role="button"><img src="img/msg_share.png"></a>';
}
function likeMessage_rewards(msg, i)
{

    $('#likingrewards' + i).html('<img src="img/msg_dn_down.png">');
    //document.getElementById('liking'+i).innerHTML='<a href="javascript:likeMessage(\''+json[i].msg+'\',\''+i+'\');" data-role="button"><img src="img/msg_share.png"></a>';
}
function likeMessagefb(msg, i)
{
    $('#likingfb' + i).html('<img src="img/msg_dn_down.png">');
}
function likeMessagetw(msg, i)
{
    $('#likingtw' + i).html('<img src="img/msg_dn_down.png">');
}
function likeMessagepin(msg, i)
{
    $('#likingpin' + i).html('<img src="img/msg_dn_down.png">');
}

function shareMessagefb(msg)
{
    //window.plugins.socialsharing.share(msg,'Gini & Jony');
    window.plugins.socialsharing.shareViaFacebookWithPasteMessageHint(msg, null /* img */, null /* url */, brandname, function () {
        console.log('share ok')
    }, function (errormsg) {
        alert(errormsg)
    })
}

function shareMessagetw(msg)
{
    //window.plugins.socialsharing.share(msg,'Gini & Jony');
    window.plugins.socialsharing.shareViaTwitter(msg);
}
function shareMessage(msg)
{
    window.plugins.socialsharing.share(msg, brandname);
}

function showTabContentRSS(id, url) {
  if(url==json_fb)
	{

  $.getJSON(
     url, {
     
       }, function (json) {

      
         renderTemplate(id, json);

     

          localStorage.setItem('facebook_oneawadhcenter',JSON.stringify(json.item));
     

    

       }).error(function () {
		 try{
			 renderTemplate(id,JSON.parse(localStorage.getItem('facebook_oneawadhcenter')));
		 }catch(err)
		   {
         alert("Error: Could not connect to Server, make sure you are connected to Network");
		   }
        }
   );
 
}
if(url==RSS_youtube)
{

  $.getJSON(
     url, {
     
       }, function (json) {

      
         renderTemplate(id, json.feed.entry);

     

          localStorage.setItem('youtube_oneawadhcenter',JSON.stringify(json.feed.entry));
     

    

       }).error(function () {
		   try{
			 renderTemplate(id,JSON.parse(localStorage.getItem('youtube_oneawadhcenter')));
		   }
		   catch(err)
		   {
         alert("Error: Could not connect to Server, make sure you are connected to Network");
		   }
        }
   );


}
else if(url==RSS_twitter)
{


  $.ajax({
                url: url,
                type: 'GET',
                timeout: 50000,
				dataType: 'json',
                success: function (data, textStatus, xhr) {

				console.log(JSON.stringify(data));
				renderTemplate(id, data);

			
            //  localStorage.setItem('twitter',JSON.stringify(json.responseData.feed.entries));
            localStorage.setItem('twitter_oneawadhcenter', JSON.stringify(data));
                },
                error: function (xhr, textStatus, errorThrown) {
					var err = eval("(" + xhr.responseText + ")");

					alert(err.Message);

                  try {
				} catch (err)
				{
					renderTemplate(id, JSON.parse(localStorage.getItem('twitter_oneawadhcenter')));
					//alert('here in catch');
				}
            //alert("Oops network error!!Please try again");
                }
            });


}
else if(url==RSS_pinterest)
{

 
  $.getJSON(
     url, {
     
       }, function (json) {

      
         renderTemplate(id, json.body);
			
     
			console.log(JSON.stringify(json.body));
          localStorage.setItem('pinterest_oneawadhcenter',JSON.stringify(json.body));
       

    

       }).error(function () {
		   try{
			    renderTemplate(id,JSON.parse(localStorage.getItem('pinterest_oneawadhcenter')));
		   }catch(err)
		   {
         alert("Error: Could not connect to Server, make sure you are connected to Network");
		   }
        }
   );
 

}
else if(url==RSS_tumblr)
{

 
  $.getJSON(
     url, {
     
       }, function (json) {

      
         //renderTemplate(id, json.responseData.feed.entries);
			renderTemplate(id, json.channel.item);
     

        //  localStorage.setItem('twitter',JSON.stringify(json.responseData.feed.entries));
       localStorage.setItem('tumblr_oneawadhcenter',JSON.stringify(json.channel.item));

    

       }).error(function () {
		   try{
			   renderTemplate(id,JSON.parse(localStorage.getItem('tumblr_oneawadhcenter')));
		   }catch(err)
		   {
         alert("Error: Could not connect to Server, make sure you are connected to Network");
		   }
        }
   );


}
else if(url==RSS_instagram)
{

 
  $.getJSON(
     url, {
     
       }, function (json) {

      
         //renderTemplate(id, json.responseData.feed.entries);
			renderTemplate(id, json.user);
     

        //  localStorage.setItem('twitter',JSON.stringify(json.responseData.feed.entries));
       localStorage.setItem('instagram_oneawadhcenter',JSON.stringify(json.user));

    

       }).error(function () {
		   try{
			   renderTemplate(id,JSON.parse(localStorage.getItem('instagram_oneawadhcenter')));
		   }catch(err)
		   {
         alert("Error: Could not connect to Server, make sure you are connected to Network");
		   }
        }
   );


}



 
}

function playvideo(url)
{

    //window.plugins.videoPlayer.play("https://www.youtube.com/watch?v=en_sVVjWFKk");
    openInWebView(url);

}
function showpopuppage1()
{

    var mainpop = document.getElementById('mainpop');
    mainpop.style.display = 'block';
    var smallImage = document.getElementById('getbarimage');
    smallImage.style.display = 'none';
    var smallImage1 = document.getElementById('getmobcoupon');
    smallImage1.style.display = 'none';
    $.mobile.changePage("#popuppage1", {transition: "slide"});

}
function showbarcode()
{
    var mainpop = document.getElementById('mainpop');
    mainpop.style.display = 'none';
    var smallImage = document.getElementById('getbarimage');
    smallImage.style.display = 'block';
    smallImage.style.margin = '0 auto';
    smallImage.src = "http://delhidaredevilsadda.com/barcode.php?text=" + user.balance;
    var smallImage1 = document.getElementById('getmobcoupon');
    smallImage1.style.display = 'none';

}

function mobilecoupon()
{
    var mainpop = document.getElementById('mainpop');
    mainpop.style.display = 'none';
    var smallImage = document.getElementById('getbarimage');
    smallImage.style.display = 'none';
    var smallImage1 = document.getElementById('getmobcoupon');
    smallImage1.style.display = 'block';
    $.ajax({
        url: SERVER + 'get_active_voucher_api.asp',
        type: 'GET',
        timeout: 30000,
        data: {
            mobileno: user.mobile,
        },
        success: function (data, textStatus, xhr) {

            //console.log("Anoop"+url);



            if (data.indexOf("Success") >= 0)
            {


                smallImage1.innerHTML = '<div>You will shortly receive a sms with your mobile coupon</div>';


            }




        },
        error: function (xhr, textStatus, errorThrown) {
            $('#login-msg').html('Could not connect to Server, make sure you are connected to Internet');
        }
    });


}

function showRewards1() {
    try {
        popupCloseRight1.remove();
    } catch (err)
    {
    }
    showRewards();
}


function showHome() {
    if (user.mobile == null || user.mobile == '')
    {
        $.mobile.changePage("#myaccount", {transition: "none"});
    }
    else
    {
        $.mobile.changePage("#page-card", {transition: "none"});
        var oth = document.getElementById("othercontent");
        var main = document.getElementById("cardcontent");
        oth.style.display = 'none';
        main.style.display = 'block';
    }
    try {
        $("#left-panel").panel("close");
    } catch (err)
    {
    }
    try {
        $("#left-panel1").panel("close");
    } catch (err)
    {
    }
    //document.getElementById("barcontent").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span><img src="img/pro_btn.png" class="mem_acc_icon"></span><a href="javascript:showLoyalty();"><span class="myacc">My Account</span></a>';
    //document.getElementById("headername").innerHTML='Membership';	
}




function getContacts() {


    try {
        var optFilter = new ContactFindOptions();
        optFilter.filter = "";  // to return all contacts
        optFilter.multiple = true; // return multiple results
        var fields = [navigator.contacts.fieldType.name, navigator.contacts.fieldType.phoneNumbers];

        // get all contacts
        navigator.contacts.find(fields, gcsSuccess, gcsError, optFilter);
    }
    catch (err)
    {
        txt = "There was an error loading contacts.\n\n";
        txt += "Error description: " + err.message + "\n\n";
        // alert(txt); 

    }
}

/* get all contacts success */
function gcsSuccess(contacts) {

    //alert("Contact sync start"+contacts.length);
    if (contacts.length != 0) {
        // get formatted names and sort
        var names = new Array();
        var contactnos = new Array();


        for (var i = 0; i < contacts.length; ++i) {


            if (contacts[i].phoneNumbers == null)
                continue;









            if (contacts[i].name) {
                var pname = contacts[i].displayName != null ? contacts[i].displayName : "No name";
                names.push(pname);

            }

            // display phone numbers
            if (contacts[i].phoneNumbers) {
                var pNumber = contacts[i].phoneNumbers[0].value;

                contactnos.push(pNumber);


            }

        }
        names.sort();



        var contactstr = '<label for="choosefrnd" class="select">Choose Friend:</label><select name="choosefrnd" id="choosefrnd"  onchange="if (this.selectedIndex) doSomething(this.selectedIndex);">';
        for (var i = 0; i < names.length; ++i) {
            contactstr += '<option value=' + contactnos[i] + '>' + names[i] + '</option>';
        }
        contactstr += '</select>';

        //alert(contactstr);
        document.getElementById("allContacts").innerHTML = contactstr;

    } else
        document.getElementById("allContacts").innerHTML = 'No Contact';
}

/* get all contacts error */
function gcsError(contactError) {
    navigator.notification.alert('Contacts Error');
}

function getContactno(i)
{
    $('#search-mobile').val(phonenos.get(i));

}
function doSomething(str)
{

    var e = document.getElementById("choosefrnd");
    var strmob = e.options[e.selectedIndex].value;

    $('#giftmno').val(strmob);

}
function addincart(i)
{
    ids.push(i);
    cart.cartdata.push({
        "index": i,
        "url": "https://halwasiya.mloyalretail.com/" + jsonary[i].brand_logo,
        "BrandId": jsonary[i].brand_id,
        "BrandName": jsonary[i].brand_name,
        "BrandValue": jsonary[i].gift_voucher_value,
        "BrandDescription": jsonary[i].brand_description,
        "Validity": jsonary[i].end_date,
    });

    indexary.push(jsonary[i].brand_id);

    $('#cartval').html(ids.length);
}


$(document).on('tap', '#view_cart', function (e, ui) {

    checkout();


});


function checkout() {
    var offers = '';
    for (var i = 0; i < cart.cartdata.length; i++)
    {
        offers = offers + cart.cartdata[i].BrandId + ',';
    }

    offers = offers.substring(0, offers.length - 1);

    $.ajax({
        url: 'https://halwasiya.mloyalretail.com/Rewards/complete.asp',
        type: 'GET',
        timeout: 50000,
        dataType: 'text', //xml/html/script/json/jsonp
        data: {'mobileno': user.mobile, 'offers': offers, 'redeemval': '0'},
        success: function (data, textStatus, xhr) {


            var $popUp = $("<div/>").popup({
                dismissible: false,
                theme: "b",
                overlyaTheme: "b",
                transition: "pop"
            }).on("popupafterclose", function () {
                //remove the popup when closing

                $(this).remove();
                ids.length = 0;
                cart.cartdata.length = 0;
                indexary.length = 0;
                showHome();




            }).css({
                'width': '270px',
                'height': '200px',
                'padding': '5px',
                'text-shadow': 'none',
                //'background': '#58b7e4 url(\'../img/background-1024x600.jpg\') 50% 50% no-repeat fixed'
                'background': '#3B7BEE'
            });
            //create a title for the popup
            $("<h2/>", {
                text: "Response!"
            }).appendTo($popUp);

            //create a message for the popup

            $("<p/>", {
                text: data + '\n'


            }).appendTo($popUp);


            //create a back button
            $("<a>", {
                text: "Close",
                "data-rel": "back"
            }).buttonMarkup({
                inline: false,
                mini: false,
                theme: "b",
                icon: "back"
            }).appendTo($popUp);

            $popUp.popup('open').trigger("create");

        },
        error: function (xhr, textStatus, errorThrown) {


            alert('Could not connect to Server, make sure you are connected to Internet');

        }
    });

}

function getVoucher(id, val) {



    $.ajax({
        url: 'https://halwasiya.mloyalretail.com/Rewards/complete.asp',
        type: 'GET',
        timeout: 50000,
        dataType: 'text', //xml/html/script/json/jsonp
        data: {'mobileno': user.mobile, 'offers': id, 'redeemval': val},
        success: function (data, textStatus, xhr) {


            var $popUp = $("<div/>").popup({
                dismissible: false,
                theme: "b",
                overlyaTheme: "b",
                transition: "pop"
            }).on("popupafterclose", function () {
                //remove the popup when closing

                $(this).remove();
                ids.length = 0;
                cart.cartdata.length = 0;
                indexary.length = 0;
                showHome();




            }).css({
                'width': '270px',
                'height': '200px',
                'padding': '5px',
                'text-shadow': 'none',
                //'background': '#58b7e4 url(\'../img/background-1024x600.jpg\') 50% 50% no-repeat fixed'
                'background': '#3B7BEE'
            });
            //create a title for the popup
            $("<h2/>", {
                text: "Response!"
            }).appendTo($popUp);

            //create a message for the popup

            $("<p/>", {
                text: data + '\n'


            }).appendTo($popUp);


            //create a back button
            $("<a>", {
                text: "Close",
                "data-rel": "back"
            }).buttonMarkup({
                inline: false,
                mini: false,
                theme: "b",
                icon: "back"
            }).appendTo($popUp);

            $popUp.popup('open').trigger("create");

        },
        error: function (xhr, textStatus, errorThrown) {


            alert('Could not connect to Server, make sure you are connected to Internet');

        }
    });

}

function showPOPup()
{

    var $popUp = $("<div/>").popup({
        dismissible: false,
        theme: "b",
        overlyaTheme: "b",
        transition: "pop"
    }).on("popupafterclose", function () {
        //remove the popup when closing

        $(this).remove();
        ids.length = 0;
        cart.cartdata.length = 0;
        indexary.length = 0;
        showHome();




    }).css({
        'width': '270px',
        'height': '200px',
        'padding': '5px',
        'text-shadow': 'none',
        //'background': '#58b7e4 url(\'../img/background-1024x600.jpg\') 50% 50% no-repeat fixed'
        'background': '#3B7BEE'
    });
    //create a title for the popup
    $("<h2/>", {
        text: "Response!"
    }).appendTo($popUp);

    //create a message for the popup

    $("<p/>", {
        text: 'Please wait...' + '\n'


    }).appendTo($popUp);


    //create a back button


    $popUp.popup('open').trigger("create");

}

function showShop() {
    // openInWebView('http://www.amazon.in/s/ref=nb_sb_noss?url=node%3D1953602031&field-keywords=divani');
    //$.mobile.changePage( "#shop", { transition: "none"} ); 
    //renderTemplatedetail('shop');
    $.mobile.changePage("#innershop", {transition: "flip"});
    var the_height = ($(window).height() - $(this).find('[data-role="header"]').height());
    var the_width = $(window).width();
    var str1 = '';
    str1 = '<embed src="http://www.oneawadhcenter.com/" width=' + the_width + ' height=' + the_height + ' /></embed>';
    $("#innershop .ui-content").html(str1);
}

function giftfriend() {
    var to_mob = $('#giftmno').val();
    var val = $('#giftpt').val();
    $.ajax({
        url: 'https://halwasiya.mloyalretail.com/m/gift_points_api.asp',
        type: 'GET',
        timeout: 50000,
        dataType: 'text', //xml/html/script/json/jsonp
        data: {'mobileno': user.mobile, 'tomobileno': to_mob, 'gift_points': val},
        success: function (data, textStatus, xhr) {


            var $popUp = $("<div/>").popup({
                dismissible: false,
                theme: "b",
                overlyaTheme: "b",
                transition: "pop"
            }).on("popupafterclose", function () {
                //remove the popup when closing

                $(this).remove();
                ids.length = 0;
                cart.cartdata.length = 0;
                indexary.length = 0;
                showHome();




            }).css({
                'width': '270px',
                'height': '200px',
                'padding': '5px',
                'text-shadow': 'none',
                //'background': '#58b7e4 url(\'../img/background-1024x600.jpg\') 50% 50% no-repeat fixed'
                'background': '#3B7BEE'
            });
            //create a title for the popup
            $("<h2/>", {
                text: "Response!"
            }).appendTo($popUp);

            //create a message for the popup

            $("<p/>", {
                text: data + '\n'


            }).appendTo($popUp);


            //create a back button
            $("<a>", {
                text: "Close",
                "data-rel": "back"
            }).buttonMarkup({
                inline: false,
                mini: false,
                theme: "b",
                icon: "back"
            }).appendTo($popUp);

            $popUp.popup('open').trigger("create");

        },
        error: function (xhr, textStatus, errorThrown) {


            alert('Could not connect to Server, make sure you are connected to Internet');

        }
    });

}

function showRecharge()
{

    var $popUp = $("<div/>").popup({
        dismissible: false,
        theme: "b",
        overlayTheme: "b",
        transition: "pop"
    }).on("popupafterclose", function () {
        //remove the popup when closing





    }).css({
        'width': '270px',
        'height': '200px',
        'padding': '5px',
        'text-shadow': 'none',
        //'background': '#58b7e4 url(\'../img/background-1024x600.jpg\') 50% 50% no-repeat fixed'
        'background': '#3B7BEE'
    });
    //create a title for the popup
    $("<h2/>", {
        text: "Response!"
    }).appendTo($popUp);

    //create a message for the popup

    $("<p/>", {
        text: 'Coming Soon...' + '\n'


    }).appendTo($popUp);


    //create a back button
    //create a back button
    $("<a>", {
        text: "Close",
        "data-rel": "back"
    }).buttonMarkup({
        inline: false,
        mini: false,
        theme: "b",
        icon: "back"
    }).appendTo($popUp);

    $popUp.popup('open').trigger("create");

}

function RewardsNA()
{

    var $popUp = $("<div/>").popup({
        dismissible: false,
        theme: "b",
        overlayTheme: "b",
        transition: "pop"
    }).on("popupafterclose", function () {
        //remove the popup when closing





    }).css({
        'width': '270px',
        'height': '200px',
        'padding': '5px',
        'text-shadow': 'none',
        //'background': '#58b7e4 url(\'../img/background-1024x600.jpg\') 50% 50% no-repeat fixed'
        'background': '#943993'
    });
    //create a title for the popup
    $("<h2/>", {
        text: "Response!"
    }).appendTo($popUp);

    //create a message for the popup

    $("<p/>", {
        text: 'RewardStore is not applicable here.\n'


    }).appendTo($popUp);


    //create a back button
    //create a back button
    $("<a>", {
        text: "Close",
        "data-rel": "back"
    }).buttonMarkup({
        inline: false,
        mini: false,
        theme: "b",
        icon: "back"
    }).appendTo($popUp);

    $popUp.popup('open').trigger("create");

}
$(document).on('pageshow', '#social', function (event, ui) {
//alert($(window).height());
    var the_height = ($(window).height() - $(this).find('[data-role="header"]').height());
    $(this).height($(window).height()).find('[data-role="content"]').height(the_height);

});
$(document).on('pageshow', '#page-card', function (event, ui) {
//alert($(window).height());
    var the_height = ($(window).height());
    $(this).height($(window).height()).find('[data-role="content"]').height(the_height);

});
$(document).on('pageshow', '#page-card1', function (event, ui) {
//alert($(window).height());
    var the_height = ($(window).height() - $(this).find('[data-role="header"]').height());
    $(this).height($(window).height()).find('[data-role="content"]').height(the_height);

});
$(document).on('pageshow', '#page-card-punch', function (event, ui) {
//alert($(window).height());
    var the_height = ($(window).height());
    $(this).height($(window).height()).find('[data-role="content"]').height(the_height);

});
$(document).on('pageshow', '#social', function (event, ui) {
//alert($(window).height());
    var the_height = ($(window).height() - $(this).find('[data-role="header"]').height());
    $(this).height($(window).height()).find('[data-role="content"]').height(the_height);

});

$(document).bind('keydown', function (event) {

    if (event.keyCode == 27) { // 27 = 'Escape' keyCode (back button)
        event.preventDefault();
    }
});

function shareApp()
{
    window.plugins.socialsharing.share('Hi, Join One Awadh Privileges.', null, 'https://taghash.co/shareimg/oneawadh.png', 'https://halwasiya.mloyalretail.com/mapp');
}

function rateApp()
{
    var deviceType = (navigator.userAgent.match(/iPad/i)) == "iPad" ? "iPad" : (navigator.userAgent.match(/iPhone/i)) == "iPhone" ? "iPhone" : (navigator.userAgent.match(/Android/i)) == "Android" ? "Android" : (navigator.userAgent.match(/BlackBerry/i)) == "BlackBerry" ? "BlackBerry" : "null";
    if (deviceType == 'iPad' || deviceType == 'iPhone')
    {
        //window.open('itms-apps://itunes.apple.com/us/app/domainsicle-domain-name-search/id511364723?ls=1&mt=8'); // or itms://
        window.open('http://180.179.202.114:82/mloyaliphone.jsp?brandname=' + brandname);
    }
    else if (deviceType == 'Android')
    {
		window.open("market://details?id=com.mobiquest.oneawadhcenter","_system");
    }
    else if (deviceType == 'BlackBerry')
    {
        window.open('http://180.179.202.114:82/mloyalbb.jsp?brandname=' + brandname);
    }
}

// onSuccess Geolocation
//
function onGeoSuccess(position) {
    /* var element = document.getElementById('geolocation');
     element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
     'Longitude: '          + position.coords.longitude             + '<br />' +
     'Altitude: '           + position.coords.altitude              + '<br />' +
     'Accuracy: '           + position.coords.accuracy              + '<br />' +
     'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
     'Heading: '            + position.coords.heading               + '<br />' +
     'Speed: '              + position.coords.speed                 + '<br />' +
     'Timestamp: '          + new Date(position.timestamp)          + '<br />';*/
    var latlng = position.coords.latitude + ',' + position.coords.longitude;
    showTabContent_Map1(latlng);

}

// onError Callback receives a PositionError object
//
function onGeoError(error) {
    alert('code: ' + error.code + '\n' +
            'message: ' + error.message + '\n');
}

function getNearStores() {
    navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);

}

function showPopuppage4() {
    $.mobile.changePage("#popuppage4", {transition: "slide"});
    showTabContent('popuppage4', 'cpns_history_json.asp');


}

$(document).on('pageinit', '#feedback', function (event, ui) {

    $('#feed_email').val(user.emailid);

});

function submitFeedback()
{

        var fname = user.firstname;
        var lname = user.lastname;
        var mobile = user.mobile;
        var email = $('#feed_email').val();
        var brand = $('#feed_brand').val();
        var comments = $('#feed_comments').val();
        var subject = $('#feed_subject').val();

		//var sid = $('#mall_loc').val();

        if (email == '') {
			toast('Please enter mandatory fields');
        } 
		else {

            $.ajax({
                url: SERVER+'feedback_json.asp',
                type: 'GET',
                timeout: 40000,
                data: {
                 
						'MobileNo': mobile,
						'FirstName': fname,
						'LastName': lname,
						'EmailId': email,
						'StoreId': '1',
						'Var1': brand,
						'Var2': subject,
						'Var3': '',
						'Var4': '',
						'Var5': '',
						'Var6': '',
						'Var7': '',
						'Var8': '',
						'Var9': '',
						'Var10': '',
						'Var11': '',
						'Var12': '',
						'Var13': comments,
						'Var14': '',
						'Var15': '',
						'Var16': '',
						'Var17': '',
						'Var18': '',
						'Var19': '',
						'Var20': ''

                },
                success: function (data, textStatus, xhr) {

					console.log('FeedbackData:'+JSON.stringify(data));

                    toast(data);

                    $.mobile.changePage("#homePage", {transition: "flip"});

					$('#feed_email').val(user.emailid);
					$('#feed_brand').val('');
					$('#feed_comments').val('');
					$('#feed_subject').val('');
                },
                error: function (xhr, textStatus, errorThrown) {
                    toast('Could not connect to Server, make sure you are connected to Internet');
                }
            });

        }

}

function showshoplinks(str)
{
    

}

function showTNC()
{
    //openInWebView('https://halwasiya.mloyalretail.com/microsite/terms_condition.asp');
    $.mobile.changePage("#innershop", {transition: "flip"});
    var the_height = ($(window).height() - $(this).find('[data-role="header"]').height());
    var the_width = $(window).width();
    var str1 = '';
    str1 = '<embed src="https://halwasiya.mloyalretail.com/microsite/tnc.asp" width=' + the_width + ' height=' + the_height + ' /></embed>';
    $("#innershop .ui-content").html(str1);
}

function showSMP()
{
    $.mobile.changePage("#showmore", {transition: "none"});
    //showTabContent('popuppage4', 'cpns_history_json.asp');
    showTabContent('showmore', 'points_history_json.asp');

}

function showLookbook()
{
    //openInWebView('http://www.divani.co.in/index.php?route=product/gallery');
    $.mobile.changePage("#innershop", {transition: "flip"});
    var the_height = ($(window).height() - $(this).find('[data-role="header"]').height());
    var the_width = $(window).width();
    var str1 = '';
    str1 = '<embed src="http://www.logixgroup.in/shopping.html" width=' + the_width + ' height=' + the_height + ' /></embed>';
    $("#innershop .ui-content").html(str1);
}

function homeLink1() {
    $.mobile.changePage("#innershop", {transition: "flip"});
    var the_height = ($(window).height() - $(this).find('[data-role="header"]').height());
    var the_width = $(window).width();
    var str1 = '';
    str1 = '<embed src="http://www.logixgroup.in/" width=' + the_width + ' height=' + the_height + ' /></embed>';
    $("#innershop .ui-content").html(str1);
}
function homeLink2() {
    $.mobile.changePage("#innershop", {transition: "flip"});
    var the_height = ($(window).height() - $(this).find('[data-role="header"]').height());
    var the_width = $(window).width();
    var str1 = '';
    str1 = '<embed src="http://www.logixgroup.in/" width=' + the_width + ' height=' + the_height + ' /></embed>';
    $("#innershop .ui-content").html(str1);
}
function homeLink3() {
    $.mobile.changePage("#innershop", {transition: "flip"});
    var the_height = ($(window).height() - $(this).find('[data-role="header"]').height());
    var the_width = $(window).width();
    var str1 = '';
    str1 = '<embed src="http://www.logixgroup.in/" width=' + the_width + ' height=' + the_height + ' /></embed>';
    $("#innershop .ui-content").html(str1);
}
function homeLink4() {
    $.mobile.changePage("#innershop", {transition: "flip"});
    var the_height = ($(window).height() - $(this).find('[data-role="header"]').height());
    var the_width = $(window).width();
    var str1 = '';
    str1 = '<embed src="http://www.logixgroup.in/" width=' + the_width + ' height=' + the_height + ' /></embed>';
    $("#innershop .ui-content").html(str1);
}
function homeLink5() {
    $.mobile.changePage("#innershop", {transition: "flip"});
    var the_height = ($(window).height() - $(this).find('[data-role="header"]').height());
    var the_width = $(window).width();
    var str1 = '';
    str1 = '<embed src="http://www.logixgroup.in/" width=' + the_width + ' height=' + the_height + ' /></embed>';
    $("#innershop .ui-content").html(str1);
}
function opennewsdetail(i)
{
    var mainpop = document.getElementById('newsdetail' + i);
    mainpop.style.display = 'block';
    var subpop = document.getElementById('news' + i);
    subpop.innerHTML = '<a href=\"javascript:closenewsdetail(' + i + ');\"><span class="read-more">Less...</span></a>';


}
function closenewsdetail(i)
{
    var mainpop = document.getElementById('newsdetail' + i);
    mainpop.style.display = 'none';
    var subpop = document.getElementById('news' + i);
    subpop.innerHTML = '<a href=\"javascript:opennewsdetail(' + i + ');\"><span class="read-more">More...</span></a>';


}

$(document).on('pageinit', '#collectionspage', function (event, ui) {
    showGalImg();

});

function showGalImg()
{

    var mainpop = document.getElementById('galimg');
    mainpop.style.display = 'block';
    var smallImage = document.getElementById('galvid');
    smallImage.style.display = 'none';
    //$.mobile.changePage( "#popuppage1", { transition: "slide"} ); 

}
function showGalVid()
{
    var mainpop = document.getElementById('galimg');
    mainpop.style.display = 'none';
    var smallImage = document.getElementById('galvid');
    smallImage.style.display = 'block';

}

function showPopupimage(str)
{
    //alert(str);
    document.getElementById('popupimages').src = str;
    //$('#popupPhotoPortrait').popup();

    $("#popupPhotoPortrait").popup("open");
}

function showYoutubeNew() {

    openInWebView('https://www.youtube.com/watch?v=d20jqGi94Go');

}

function showFbNew(){

	/*if(localStorage.getItem('selectedstore')=='ggn')
	    json_fb = json_fb_ggn;

    else if(localStorage.getItem('selectedstore')=='vk')
	    json_fb = json_fb_vk;*/


	$("#navBdr_twitter").css('display', 'none');
    $("#navBdr_facebook").css('display', 'block');
    $("#navBdr_instagram").css('display', 'none');

	$("#TWITTER").css('display', 'none');
    $("#FACEBOOK").css('display', 'block');
    $("#INSTAGRAM").css('display', 'none');

	$.mobile.changePage( "#socialpg", { transition: "none"} ); 
	//showTabContentRSS('socialwall_facebook', json_fb);

  
}

function showTwitterNew(){

	$("#navBdr_twitter").css('display', 'block');
    $("#navBdr_facebook").css('display', 'none');
    //$("#navBdr_pinterest").css('display', 'none');
    $("#navBdr_instagram").css('display', 'none');

	$("#TWITTER").css('display', 'block');
    $("#FACEBOOK").css('display', 'none');
    $("#INSTAGRAM").css('display', 'none');

	$.mobile.changePage( "#socialpg", { transition: "none"} ); 
	showTabContentRSS('socialwall_twitter', RSS_twitter);
    //openInWebView('https://twitter.com/ammisbiryani');
  
}

function showInstagramNew(){

	$("#navBdr_twitter").css('display', 'none');
    $("#navBdr_facebook").css('display', 'none');
    //$("#navBdr_pinterest").css('display', 'none');
    $("#navBdr_instagram").css('display', 'block');

	$("#TWITTER").css('display', 'none');
    $("#FACEBOOK").css('display', 'none');
    $("#INSTAGRAM").css('display', 'block');
	
	$.mobile.changePage( "#socialpg", { transition: "none"} ); 
	showTabContentRSS('socialwall_instagram', RSS_instagram);
    //openInWebView('https://www.instagram.com/ammis_biryani/');
  
}

function successHandler(result) {
    //alert('Callback Success! Result = '+result)
}
function errorHandler(error) {
    //alert(error);
}

function receivedEvent(id) {
       

 var push = PushNotification.init({ "android": {"senderID": "388561774481"}});
                     push.on('registration', function(data) {
                     
					 reg_id=data.registrationId;
                     });
          
                     push.on('notification', function(data) {
						alert(data.message);
					 
						//showInbox();
                     });
          
                     push.on('error', function(e) {
						//alert(e);
                     }
					);
    }

function showAlert(str) {

    var $popUp = $("<div/>").popup({
        dismissible: false,
        theme: "b",
        overlyaTheme: "b",
        transition: "pop"
    }).on("popupafterclose", function () {
        //remove the popup when closing

        $(this).remove();

        $.mobile.changePage("#homePage", {transition: "none"});




    }).css({
        'width': '270px',
        'height': '200px',
        'padding': '5px',
        'text-shadow': 'none',
        //'background': '#58b7e4 url(\'../img/background-1024x600.jpg\') 50% 50% no-repeat fixed'
        'background': '#1E1E1E;'
    });
    //create a title for the popup
    $("<h2/>", {
        text: "VR Diaries Alert!"
    }).appendTo($popUp);

    //create a message for the popup

    $("<p/>", {
        text: str


    }).appendTo($popUp);


    //create a back button
    $("<a>", {
        text: "Close",
        "data-rel": "back"
    }).buttonMarkup({
        inline: false,
        mini: false,
        theme: "b",
        icon: "back"
    }).appendTo($popUp);

    $popUp.popup('open').trigger("create");

}

$(document).on('pageinit', '#settings', function (event, ui) {
    $(document).on('tap', '#notificationbtn', function (e, ui) {
        notificationstatus = $('input:radio[name=Notification]:checked').val();
        //  alert($('input:radio[name=Notification]:checked').val()); // get the value from a set of radio buttons
    });
});

function openurl()
{
  
    openInWebView('http://www.oneawadhcenter.com/');

}

function bookCab()
{
	openInWebView('https://book.olacabs.com/');
	//$.mobile.changePage( "#homePage2", { transition: "none"} );
}


$(document).on('pageinit', '#interest', function (event, ui) {
    $(document).on('tap', '#favourite', function (e, ui) {
        $("#favourite").text("Added..");
    });
});
function shareMessagefb(msg)
{
	//window.plugins.socialsharing.share(msg,'Gini & Jony');
	window.plugins.socialsharing.shareViaFacebookWithPasteMessageHint(msg, null /* img */, null /* url */, brandname, function() {console.log('share ok')}, function(errormsg){alert(errormsg)})
}

function shareMessagetw(msg)
{
	//window.plugins.socialsharing.share(msg,'Gini & Jony');
      window.plugins.socialsharing.shareViaTwitter(msg);
}
function shareMessage(msg)
{
	window.plugins.socialsharing.share(msg,brandname);
}
function shareImgMessage(img)
{
	window.plugins.socialsharing.share(null, null, img, null)
}

function postonfb(img)
{
	
	window.plugins.socialsharing.shareViaFacebook(null, null, img, function() {alert('share ok')}, function() {alert('Error ok')})
}
 function tubesharefb(url)
{
    
    
	if(user.mobile!='')
	window.plugins.socialsharing.shareViaFacebook(null, null, url, youtubesharefb, function() {alert('Error ok')})
    else
    showLoginPage();
    
}

function youtubesharefb()
{
	senddata('FacebookShare');
	 toast("You earned 10 points");

}

function washare(url)
{
	if(user.mobile!='')
	window.plugins.socialsharing.shareViaWhatsApp(null, null, url, washaresucc, function() {alert('Error ok')})
    else
    showLoginPage();
}

function washaresucc()
{
	senddata('WhatsAppShare');
	 toast("You earned 10 points");

}

function twshare(url)
{
	
	window.plugins.socialsharing.shareViaTwitter(null, null, url, twharesucc, function() {alert('Error ok')})
}

function twharesucc()
{
	senddata('TweeterShare');
	 toast("You earned 10 points");

}



function senddata(activity)
{
 
 var uname = localStorage.getItem('usernameoneawadhcenter');
 console.log("In senddata"+uname);
 if(uname==null || uname=='undefined' || uname=='null' || uname=='')
	{
	 toast('Please log in to earn points');
	}
	else
	{
  $.ajax({
   //url: SERVER+'mloyallogin_json.asp', //login.php
   url: 'https://halwasiya.mloyalretail.com/m/mloyalactivity_json.asp', //login.php
   type: 'GET',
   timeout: 50000,
    dataType: 'json', //xml/html/script/json/jsonp
    data: {'username': uname,'activity':activity},
    complete: function(xhr, textStatus) {
   //called when complete
    },
    success: function(data, textStatus, xhr) {
  
   //called when successful
   if(data.status=='success'){

	  // $('#tot_points').html(data.balance);
	  
   // user.balance = data.balance;
   
   }
    },
    error: function(xhr, textStatus, errorThrown) {
 //$.mobile.changePage( "#homepage", { transition: "slide"} );
   //$('#login-msg').html('wtf: '+textStatus+': '+errorThrown); 
  // $('#login-msg').html('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });
	}

}

function showDirectory()
{
	
	  resetPage();
	  $.mobile.changePage('#Directory',{transition:"slide"});
      showTabContent_json_brand_dir('Directory','');
	  currentcategory='Directory';
	  category_nm='';
	
}
function showSpa1()
{    $.mobile.changePage('#HealthWellness',{transition:"slide"});
	  showTabContent_json_brand('HealthWellness','5');
	  currentcategory='HealthWellness';
	  category_nm='Category- Beauty & Skin';
}
function showshoppinginner(shcatname)
{
   resetPage();
  
   showTabContent_json_brand('shopping',shcatname);
    if(shcatname=='6')
	{
    document.getElementById('acatname').innerHTML='Acessories';
	category_nm='Category- Accessories';
	}
	else if(shcatname=='4')
	{
	document.getElementById('acatname').innerHTML='Apparels';
	category_nm='Category- Apparels';
	}
	else if(shcatname=='5')
	{
	document.getElementById('acatname').innerHTML='Apparels & Footwear';
	category_nm='Category- Apparels & Footwear';
	}
	else if(shcatname=='7')
	{
    document.getElementById('acatname').innerHTML='Acessories & Footwear';
	category_nm='Category- Acessories & Footwear';
	}
	else if(shcatname=='10')
	{	
    document.getElementById('acatname').innerHTML='Cosmetic';
	category_nm='Category- Cosmetic';
	}
	else if(shcatname=='9')
	{	
    document.getElementById('acatname').innerHTML='Footwear';
	category_nm='Category- Footwear';
	}
	else if(shcatname=='8')
	{
    document.getElementById('acatname').innerHTML='Lingerie';
	category_nm='Category- Lingerie';
	}
	else if(shcatname=='1')
	{
	document.getElementById('acatname').innerHTML='Retail';
	category_nm='Category- Retail';
	}
	else if(shcatname=='11')
	{
	document.getElementById('acatname').innerHTML='Telecom';
	category_nm='Category- Telecom';
	}
	else if(shcatname=='3')
	{
    document.getElementById('acatname').innerHTML='Watches';
	category_nm='Category- Watches';
	}
	else if(shcatname=='14')
	{
    document.getElementById('acatname').innerHTML='Luggage';
	category_nm='Category- Luggage';
	}
	else if(shcatname=='13')
	{	
    document.getElementById('acatname').innerHTML='Food';
	category_nm='Category- Food';
	}
	/*else if(shcatname=='6')
	{	
    document.getElementById('acatname').innerHTML='Salon & Spa';
	var tbtn = document.getElementById("tbk_btn");
    tbtn.style.display = 'block';
	//document.getElementById("tbk_btn_type").innerHTML= 'Book An Appointment';
	category_nm='Category- Salon & Spa';
	}*/
	else if(shcatname=='2')
	{	
    document.getElementById('acatname').innerHTML='Entertainment';
	category_nm='Category- Entertainment';
	}
	
	
	
	 currentcategory='accessories_byCategory';
}

$(document).on('pagebeforeshow', '#FoodBox', function () {
	//alert("here");
	  showFood();

	  currentcategory='FoodBox';
	  category_nm='Category- Food';
	  });

$(document).on('pagebeforeshow', '#FineDining', function () {
	//alert("here");
	  showFood2();

	  currentcategory='FineDining';
	  category_nm='Category- Ice-Creams & More';
	  });	 

$(document).on('pagebeforeshow', '#HealthWellness', function () {
	
	  showSpa();

	  currentcategory='HealthWellness';
	  category_nm='Category- Salon & Spa';
	  });


$(document).on('pagebeforeshow', '#attractions', function () {
	//alert("here");
	  resetPage();
      showTabContent_json_brand('attractions','21');
	  currentcategory='attractions';
	  });


$(document).on('pagebeforeshow', '#PVR_Entertainment', function () {
	//alert("here");
	  showEntertainment();

	  currentcategory='PVR_Entertainment';
	  category_nm='Category- Entertainment';

	  });
	
  function showTabContent_json_brand(id,catid) {
    
    var tabserver='https://halwasiya.mloyalretail.com/APIs/brands_json.asp';
	//alert("there"+tabserver);	
	 $.getJSON(
            tabserver , {
				'apiuid' : 'MLOYALAPI',
				'apipswd' : 'Ml0yalAP!2o15',
				'catid': catid
                }, function (json) {
        //console.log("SSSS" + JSON.stringify(json));
		
        renderTemplate(id, json);
        localStorage.setItem(id+'brands', JSON.stringify(json));
    }).error(function () {
        try {
            renderTemplate(id, JSON.parse(localStorage.getItem(id+'brands')));
        } catch (err)
        {
            alert("Error: Could not connect to Server, make sure you are connected to Network");
        }
    });
}

function showTabContent_json_brand_dir(id,catid) {
    
	var sid='1';


    var tabserver='https://halwasiya.mloyalretail.com/APIs/brands_json.asp';
	
	//alert("there"+tabserver);	
	 $.getJSON(
            tabserver , {
				'apiuid' : 'MLOYALAPI',
				'apipswd' : 'Ml0yalAP!2o15',
				'categoryid': catid
				
                }, function (json) {
        console.log("SSSS" + JSON.stringify(json));
		
        renderTemplate(id, json);
        localStorage.setItem(id+'brands', JSON.stringify(json));
    }).error(function () {
        try {
            renderTemplate(id, JSON.parse(localStorage.getItem(id+'brands')));
        } catch (err)
        {
            alert("Error: Could not connect to Server, make sure you are connected to Network");
        }
    });
}







function showbackhoteloffice()
{
	if(currentcategory=='Directory')
	$.mobile.changePage('#'+currentcategory,{transition:"slide"});
	else
	$.mobile.changePage('#homePage',{transition:"slide"});
}
2

function showbackEvents()
{
	if(currentcategory=='attractions')
	$.mobile.changePage('#'+currentcategory,{transition:"slide"});
	else
	$.mobile.changePage('#Community_connect',{transition:"slide"});
}
/*function showSpa_skydeck()
{   
	  showTabContent_json_brand('attractions_skydeck','17');
	  currentcategory='attractions';
}*/
var toast = function (msg) {
    $("<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'><h5>" + msg + "</h5></div>")
            .css({display: "block",
                opacity: 0.94,
                position: "fixed",
                padding: "7px",
                "text-align": "center",
                width: "270px",
                background: "#ffffff",
                "text-shadow": "none",
                "color": "#ec0675",
                left: ($(window).width() - 284) / 2,
                top: $(window).height() / 2})
            .appendTo($.mobile.pageContainer).delay(2500)
            .fadeOut(400, function () {
                $(this).remove();
            });
}



function showLoginPage()
{


     postregister='MYREWARDS';
	 var $popUp = $("<div/>").popup({
        dismissible: false,
        theme: "b",
        overlyaTheme: "b",
        transition: "pop"
    }).on("popupafterclose", function () {
        //remove the popup when closing

        $(this).remove();





    }).css({
        'width': '90%',
        'height': '90%',
        'padding': '5px',
        'text-shadow': 'none',
        'background': '#ffffff', //'#3B7BEE'
        'color': '#000000',
        'margin-left': '2%'
    });
    //create a title for the popup
    $("<h2/>", {
        text: ""
    }).appendTo($popUp);

    //create a message for the popup

    $("<p/>", {
        html: '<div style="color:black;">You are not logged in.Please register now</div><div id=btnlloc><button class=\"btnInterest\" data-inline=\"true\" id=\"checkin_button\" onClick=\"javascript:showLoginPageNow();\">Register Now</button></div>' + '\n'


    }).appendTo($popUp);

    $("#btn1").css("display", "none");


    //create a back button

    //create a back button
    $("<a href=# data-rel=back class='ui-btn ui-corner-all ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right'>", {
        text: "",
        "data-rel": "back",
        "data-role": "button"

    }).buttonMarkup({
        inline: true,
        mini: true,
        theme: "d",
        icon: "delete"
    }).appendTo($popUp);

    $popUp.popup('open').trigger("create");

	
        
	 
    

	
	
}



function showLoginPageNow()
{

	$.mobile.changePage('#register', {transition: "flip"} );

}


$(document).on('pageshow', '#Community_connect', function () {
	//alert("here");
	  resetPage();
      showTabContent_json_events('events');
	  //currentcategory='FoodBox';
	  });

function showTabContent_json_events(id) {

	var today = new Date();

	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();
	//alert("dd"+dd+"mm"+mm+"yyyy"+yyyy);

	var myDate2 = new Date();
    var result2 = myDate2.addMonths(1);
	
	var dd2 = myDate2.getDate();
	var mm2 = myDate2.getMonth()+1; //January is 0!
	var yyyy2 = myDate2.getFullYear();
	//alert("dd2"+dd2+"mm2"+mm2+"yyyy2"+yyyy2);
	/*var edd='';
	if(mm=='2' || mm=='4' || mm=='6' || mm=='7' || mm=='9' || mm='11' || mm=='12')
	{
		edd='31';

	}
	if(mm=='3' || mm=='5' || mm=='8' || mm=='10')
	{	
		edd='30';
	}*/
	var startdate=mm+'/'+dd+'/'+yyyy;
	var enddate=mm2+'/'+dd2+'/'+yyyy2;
    
    var tabserver='https://halwasiya.mloyalretail.com/APIs/geteventsdetails_json.asp';
	//alert("there"+tabserver);	
	 $.getJSON(
            tabserver , {
				'apiuid' : 'MLOYALAPI',
				'apipswd' : 'Ml0yalAP!2o15',
				'sdate': startdate,
				'edate': enddate
                }, function (json) {
        console.log("SSSS" + JSON.stringify(json));
		
        renderTemplate(id, json);
        localStorage.setItem('events', JSON.stringify(json));
    }).error(function () {
        try {
            renderTemplate(id, JSON.parse(localStorage.getItem('events')));
        } catch (err)
        {
            toast("Error: Could not connect to Server, make sure you are connected to Network");
        }
    });
}

Date.isLeapYear = function (year) { 
    return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)); 
};

Date.getDaysInMonth = function (year, month) {
    return [31, (Date.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
};

Date.prototype.isLeapYear = function () { 
    return Date.isLeapYear(this.getFullYear()); 
};

Date.prototype.getDaysInMonth = function () { 
    return Date.getDaysInMonth(this.getFullYear(), this.getMonth());
};

Date.prototype.addMonths = function (value) {
    var n = this.getDate();
    this.setDate(1);
    this.setMonth(this.getMonth() + value);
    this.setDate(Math.min(n, this.getDaysInMonth()));
    return this;
};

function showgallery(elem,noofelems)
{
for(var j=1;j<=30;j++)
	{
	//document.getElementById('gal'+j).css("display", "none");
	//document.getElementById('slide'+j+'img').css("display", "none");
	 $("#gal"+j).css("display", "none");
	 $("#slide"+j+"img").css("display", "none");
	}	
for(var i=1;i<=noofelems;i++)
	{
	document.getElementById('gal'+i).src = 'http://180.179.218.225:82/logix/vrgallery/'+elem+'/thumb/'+elem+'_th'+i+'.jpg';
	$("#gal"+i).css("display", "block");
	document.getElementById('slide'+i+'img').src = 'http://180.179.218.225:82/logix/vrgallery/'+elem+'/large/'+elem+'_l'+i+'.jpg';
	$("#slide"+i+"img").css("display", "block");
	}

   $.mobile.changePage('#gallery', {transition: "none"} );
}

$(document).on('pageshow', '#PVR_Movies', function () {
	  
      showTabContentNew('movies','getmoviesdetails_json.asp');

	  });

function showTabContentNew(id, url) {

	var today = new Date();

	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	var myDate2 = new Date();
    var result2 = myDate2.addMonths(1);
	
	var dd2 = myDate2.getDate();
	var mm2 = myDate2.getMonth()+1; //January is 0!
	var yyyy2 = myDate2.getFullYear();
	
	var startdate=mm+'/'+dd+'/'+yyyy;
	var enddate=mm2+'/'+dd2+'/'+yyyy2;

	console.log('Movies from:'+startdate+' to '+enddate);
	console.log("url:" + url);

    var tabserver = '';
	if(id == 'movies' || id=='events')
	{
		tabserver = "https://halwasiya.mloyalretail.com/APIs/";
	}
    
    else
    {

        tabserver = "https://halwasiya.mloyalretail.com/m/";
    }
    $.getJSON(
            tabserver + url, {
				apiuid:'MLOYALAPI',
			    apipswd:'Ml0yalAP!2o15',
				sdate: startdate,
				edate: enddate

            }, function (json) {
        console.log("Movies:" + JSON.stringify(json));

        renderTemplate(id, json);

    }).error(function () {
        alert("Error: Could not connect to Server, make sure you are connected to Network");
    });
}

function showRewardsNew()
{
	//openInWebView('https://halwasiya.mloyalretail.com/microsite/');
	var ref = window.open('https://halwasiya.mloyalretail.com/microsite/', '_blank', 'location=yes,toolbar=yes');
}

function purchaseHistory()
{
	var pop = document.getElementById('purchaseHistory');
	if(pop.style.display=='block')
		pop.style.display = 'none';
    else
		pop.style.display = 'block';
   var pop1 = document.getElementById('redeemHistory');
		pop1.style.display = 'none';
}

function redeemHistory()
{
	var pop = document.getElementById('redeemHistory');
	if(pop.style.display=='block')
		pop.style.display = 'none';
    else
		pop.style.display = 'block';
	var pop1 = document.getElementById('purchaseHistory');
		pop1.style.display = 'none';
}

function showTest_directory()
{
	  
	  $.mobile.changePage('#DirectoryNew',{transition:"slide"});
      showTabContent_json_brand('DirectoryNew','');
	  
}


$(document).on('pageshow', '#Community_connect', function () {
	//alert("here");
	  resetPage();
      showTabContent_json_events('events');
	  //currentcategory='FoodBox';
	  });


$(document).on('pageshow', '#bill_upload', function () {
	if(user.mobile==null || user.mobile=='')
	{
		postregister='bill_upload';
		//$.mobile.changePage( "#register", { transition: "none"} );
		$.mobile.changePage( "#profilepage", { transition: "none"} );
	}
	else
	{
	     $('#TxtMobile').val(localStorage.getItem("usernameoneawadhcenter"));
	     document.getElementById("TxtMobile").readOnly = true;
	}
	  });



function upload_bill()
{

        var bill_mobile = $('#TxtMobile').val();
        //var bill_store = $('#TxtStore').val();
		var bill_store = '1';
        var bill_no = $('#TxtBillNo').val();
        var bill_date = $('#TxtBilldate').val();
		var bill_amnt = $('#TxtBillAmt').val();

		if(bill_date.indexOf('-')>0)
			{
			var dob = bill_date.split('-');
			var mm = dob.length == 3 ? dob[1] : '';
			var dd = dob.length == 3 ? dob[2] : '';
			var yyyy = dob.length == 3 ? dob[0] : '';
			}
		else if(bill_date.indexOf('/')>0)
			{
			var dob = bill_date.split('/');
			var mm = dob.length == 3 ? dob[1] : '';
			var dd = dob.length == 3 ? dob[2] : '';
			var yyyy = dob.length == 3 ? dob[0] : '';
			}
		
		else if(bill_date.indexOf('.')>0)
			{
			var dob = bill_date.split('.');
			var mm = dob.length == 3 ? dob[1] : '';
			var dd = dob.length == 3 ? dob[2] : '';
			var yyyy = dob.length == 3 ? dob[0] : '';
			}

		console.log("Values:"+bill_mobile+","+bill_store+","+bill_no+","+dd+":"+mm+":"+yyyy+","+bill_amnt+","+filenm);

		if(bill_mobile=='' || bill_store==''|| bill_store=='0' || bill_no=='' || bill_date=='' || bill_date=='undefined' || bill_amnt=='' || filenm==''){

			toast('Please enter mandatory fields!');

		}

		else if(bill_mobile.length<10 || bill_mobile.length>10){

			toast('Invalid mobile number');
		}
		else
		{
			$.ajax({
			url: 'https://halwasiya.mloyalretail.com/apis/cust_pending_bills_json_api.asp',
			type: 'GET',
			timeout: 30000,
		  	data: {

				apiuid: 'MLOYALAPI',
				apipswd: 'Ml0yalAP!2o14',
				Mobileno: bill_mobile,
				Billno: bill_no,
				BillDt: bill_date,
				fileName: filenm,
				scode: bill_store,
				BillAmt: bill_amnt
				
			},
			success: function(data, textStatus, xhr) {
					
				toast('Bill added successfully. Points will be auto - credited within 24 hours');
	
				$.mobile.changePage( "#homePage", {transition: "flip"} );

				$('#TxtMobile').val('');
				$('#TxtBillNo').val('');
				$('#TxtBilldate').val('');
				$('#TxtBillAmt').val('');

				var myselect = $("select.slct1");
				myselect.selectedIndex = 0;
				myselect.selectmenu("refresh");

				filenm='';

				document.getElementById('bill_img').src= 'images/billmain.png';
			},
			error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});
		

		}
}

/* uploading bill image to server */

			function uploadFromGallery() {

				//$("#popupcapturetype").popup("close");

				navigator.camera.getPicture(uploadPhoto, onFail, { quality: 50,
					destinationType: navigator.camera.DestinationType.FILE_URI,
					sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
				});

			}

		  function capturePhoto() {

	          navigator.camera.getPicture(uploadPhoto, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI });
           }

			function uploadPhoto(imageURI) {

				var b_Image = document.getElementById('bill_img');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;


				var options = new FileUploadOptions();
				options.fileKey="file";
				var fName=user.mobile+'_'+Math.floor((Math.random() * 1000) + 1)+'_'+(imageURI.substr(imageURI.lastIndexOf('/')+1)).replace('%3A','-');
				//var fName='profile_'+user.mobile;
				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm='http://180.179.202.114:8383/oneawadhcenter/uploads/'+options.fileName;
				filenm=options.fileName+".jpg";
				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;

				var ft = new FileTransfer();
				ft.upload(imageURI, encodeURI("http://180.179.202.114:8383/oneawadhcenter/upload_bill_new.php"), win, fail, options, true);
			}

			function win(r) {
				toast("Bill uploaded successfully.");
			}

			function fail(error) {
				toast("There was an error uploading bill");
			}

			function onFail(message) {
				toast('Failed because: ' + message);
			}


function popup_concierge(srv_str)
{
	/*var str = '';
	if(srv_str=='atm')
	{
		 str +='<div class="ui-grid-solo">';
		 str +='<ul>';
		 str +='<li>We CITI Bank ATM at the third Floor near the Gaming Vegas for the ease of your Shopping.</li>';
		 str +='</ul>';
		 str +='</div>';
	}
	else if(srv_str=='baggage')
	{
		 str +='<div class="ui-grid-solo">';
		 str +='<ul>';
		 str +='<li>Baggage Counter of PVR Cinemas at the Second Floor.</li>';
		 str +='</ul>';
		 str +='</div>';
	}
	else if(srv_str=='carwash')
	{
		 str +='<div class="ui-grid-solo">';
		 str +='<ul>';
		 str +='<li>Express Car Wash- Parking Level 2.</li>';
		 str +='</ul>';
		 str +='</div>';
	}
	else if(srv_str=='entertainment')
	{
		 str +='<div class="ui-grid-solo">';
		 str +='<ul>';
		 str +='<li>PVR Cinemas (Second Floor) and the Gaming Vegas (Third Floor).</li>';
		 str +='</ul>';
		 str +='</div>';
	}
	else if(srv_str=='baby')
	{
		 str +='<div class="ui-grid-solo">';
		 str +='<ul>';
		 str +='<li>For taking ease in care of your Babies at Third Floor Food Quest near Baskin Robbins.</li>';
		 str +='</ul>';
		 str +='</div>';
	}
	else if(srv_str=='firstaid')
	{
		 str +='<div class="ui-grid-solo">';
		 str +='<ul>';
		 str +='<li>First Aid assistance is available at the Concierge Desk (Ground Floor)</li>';
		 str +='</ul>';
		 str +='</div>';
	}
	else if(srv_str=='giftwrap')
	{
		 str +='<div class="ui-grid-solo">';
		 str +='<ul>';
		 str +='<li>Archies (Second Floor)</li>';
		 str +='</ul>';
		 str +='</div>';
	}
	else if(srv_str=='disabledassist')
	{
		 str +='<div class="ui-grid-solo">';
		 str +='<ul>';
		 str +='<li>We arrange Handicap Assistance for those who require from the Concierge (Ground Floor)</li>';
		 str +='</ul>';
		 str +='</div>';
	}
	else if(srv_str=='privp')
	{
		 str +='<div class="ui-grid-solo">';
		 str +='<ul>';
		 str +='<li>For Pregnant Womens and Senior Citizens at Level B1.</li>';
		 str +='</ul>';
		 str +='</div>';
	}
	else if(srv_str=='spa')
	{
		 str +='<div class="ui-grid-solo">';
		 str +='<ul>';
		 str +='<li>Get beauty treatments at Looks Salon on Second Floor.</li>';
		 str +='</ul>';
		 str +='</div>';
	}
	else if(srv_str=='tailoring')
	{
		 str +='<div class="ui-grid-solo">';
		 str +='<ul>';
		 str +='<li>Ground Floor near Pantaloons.</li>';
		 str +='</ul>';
		 str +='</div>';
	}
	else if(srv_str=='valetp')
	{
		 str +='<div class="ui-grid-solo">';
		 str +='<ul>';
		 str +='<li>Parking Easy with Logix City Centre available at the Main Entrance.</li>';
		 str +='</ul>';
		 str +='</div>';
	}
	else if(srv_str=='concierge')
	{
		 str +='<div class="ui-grid-solo">';
		 str +='<ul>';
		 str +='<li>Customer Service Desk:</li>';
		 str +='<li>Location: Ground Floor at Central Atrium</li>';
		 str +='<li>Landline - 0120-2471552</li>';
		 str +='<li>Mall Timings -10 AM to 10 PM</li>';
		 str +='</ul>';
		 str +='</div>';
	}

	 document.getElementById("popup_concierge_div").innerHTML = str;
	 $("#popup_concierge").popup();
	 $("#popup_concierge").popup("open");*/
}


function showFloor(flr)
{
	var zmImage = document.getElementById('flr_imgzm');

	if(flr=='LGF')
	{
		document.getElementById("flrplanname").innerHTML = 'Lower Ground Floor';
		zmImage.src = 'https://taghash.co/oneawadhcenternew/floors/LEASED_LGF.png';
		$.mobile.changePage("#floorplan", {transition: "none"});
	}
	else if(flr=='GF')
	{
		
		document.getElementById("flrplanname").innerHTML = 'Ground Floor';
		zmImage.src = 'https://taghash.co/oneawadhcenternew/floors/LEASED_UGF.png';
		$.mobile.changePage("#floorplan", {transition: "none"});
	}
	else if(flr=='FF')
	{
		
		document.getElementById("flrplanname").innerHTML = 'First Floor';
		zmImage.src = 'https://taghash.co/oneawadhcenternew/floors/LEASED_FIRST-FLOOR.png';
		$.mobile.changePage("#floorplan", {transition: "none"});
	}
	else if(flr=='SF')
	{
		
		document.getElementById("flrplanname").innerHTML = 'Second Floor';
		zmImage.src = 'https://taghash.co/oneawadhcenternew/floors/LEASED_SECOND-FLOOR.png';
		$.mobile.changePage("#floorplan", {transition: "none"});
	}
	else if(flr=='TF')
	{
		
		document.getElementById("flrplanname").innerHTML = 'Third Floor';
		zmImage.src = 'https://taghash.co/oneawadhcenternew/floors/LEASED_THIRD-FLOOR.png';
		$.mobile.changePage("#floorplan", {transition: "none"});
	}

}
 function toFloor()
 {
	$.mobile.changePage("#homePage", {transition: "none"});
	var zmImage = document.getElementById('flr_imgzm');
	zmImage.src = '';
 }

$(document).on('pageshow', '#page-forgot-password', function (event, ui)
 {
	 
  //localStorage.setItem("firsttime","Yes"); 

});

function sendPass(){
	
	 var mob = $('#forgot_mobile').val();
	 
	 if(mob==''){
		 toast('Please enter your mobile number');
	 }
	 else if(mob.length==10){
		 $.mobile.changePage("#profilepage");
		 $.ajax({
			url: SERVER+'forgot_pswd.asp',
			type: 'GET',
			timeout: 50000,
			data: {'mobileno': mob},
			success: function(data, textStatus, xhr) {
			
			 if(data.toLowerCase()=='success'){

				  toast('The passcode has been sent to your mobile.Please check your SMS.');
			    
				  localStorage.setItem("SMSMNO",mob);
			      $('#username_p').val(mob);
				  localStorage.setItem('usernameoneawadhcenter',mob);
				  $.mobile.changePage("#profilepage");
              }
			  else{
				 toast(mob+' is not registered, please try again.');
				 //toast('Thank you for your interest in the V Club. The registration is not yet open. We will let you know soon.');
				 $('#forgot_mobile').val('');
			 }
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				 toast('Could not connect to Server, make sure you are connected to Internet');
				}
		});
  }else{
   toast('Please enter 10 digits mobile number');
  }
  
 
}

function sendPassnew(mob){
	
		 $.mobile.changePage("#register");

		 $.ajax({
			url: SERVER+'forgot_pswd.asp',
			type: 'GET',
			timeout: 100000,
			data: {'mobileno': mob},
			success: function(data, textStatus, xhr) {
			
			 if(data.toLowerCase()=='success'){

				  toast('The passcode has been sent to your mobile.Please check your SMS.');
			    
				  localStorage.setItem("SMSMNO",mob);
			      $('#username_p').val(mob);
				  

				  $("#signUpdiv").slideUp(300);
                  $("#logindiv").slideDown(300);
				  

              }
			  else{
				 toast(mob+' is not registered, please try again.');
				 //toast('Thank you for your interest in the V Club. The registration is not yet open. We will let you know soon.');
				 //$('#forgot_mobile').val('');
			 }
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				 toast('Could not connect to Server, make sure you are connected to Internet');
				}
		});
  
  
 
}

$(document).on('pageinit', '#profilepage', function (event, ui) {

		
  
        $(document).on('tap', '#login_button', function (e, ui) {
		console.log("tapped");
			
		e.preventDefault();
		e.stopPropagation();
		
		authenticate();

	});
});

function authenticate(){
	
  var uname = $('#username_p').val();
  var pwd = $('#password_myacc').val();
  var phno = localStorage.getItem("usernameoneawadhcenter");

  console.log(uname+','+pwd);

  if(phno=='') {
		JSON.stringify(phonenos);
  }
  else {
	phno='';
  }
 if(uname=='' || pwd==''){
  toast('Please enter Mobile Number/Passcode');
 }
 else{
  $.ajax({
   url: SERVER+'mloyallogin_json.asp', //login.php
   type: 'GET',
   timeout: 50000,
    dataType: 'json',
    data: {'username': uname, 'password': pwd,'phonenos':phno},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
   
	console.log("success"+JSON.stringify(data));
   if(data.status=='success'){

    user.balance = data.balance;
    user.firstname = data.firstname;
    user.id = data.id;
    user.lastname = data.lastname;
    user.total = data.total;
    user.validity = data.validity;
    user.mobile = uname;
	user.trans_sms = data.trans_sms;
	user.mktgsms = data.mktgsms;
	user.cpns = data.cpns;
    user.ads = data.ads;
    user.dob = data.dob;
    user.emailid = data.emailid;
	user.slabid_oneawadhcenter = data.slabid;
	user.def_store = data.store;
	user.def_city = data.store_city;
	user.visit_frequency = data.visit_frequency;

		//user.firstname= localStorage.getItem('firstname');
		//user.lastname= localStorage.getItem('lastname');
		//user.emailid= localStorage.getItem('emailid');
		//user.dob=localStorage.getItem('dob_dd')+"-"+localStorage.getItem('dob_mm')+"-"+localStorage.getItem('dob_yyyy');

    
	if(user.cpns==null || user.cpns=='null' || user.cpns=='undefined') {
		user.cpns='0';
	}

	console.log("user.firstname:"+user.firstname);

	//console.log("success"+data.status);
    
    $('#username_p').val('');
    $('#password_myacc').val('');
  
   localStorage.setItem('usernameoneawadhcenter',uname);
   localStorage.setItem('passwordoneawadhcenter',pwd);
   localStorage.setItem('balance',user.balance);
   localStorage.setItem('firstname',user.firstname);
   localStorage.setItem('lastname',user.lastname);
   localStorage.setItem('id',user.id);
   localStorage.setItem('total',user.total);
   localStorage.setItem('validity',user.validity);
   localStorage.setItem('trans_sms',user.trans_sms);
   localStorage.setItem('mktgsms',user.mktgsms);
   localStorage.setItem('cpns',user.cpns);
   localStorage.setItem('ads',user.ads);
   localStorage.setItem('dob',user.dob);
   localStorage.setItem('emailid',user.emailid);
   localStorage.setItem('slabid_oneawadhcenter',user.slabid_oneawadhcenter);
   localStorage.setItem('def_store',user.def_store);
   localStorage.setItem('def_city',user.def_city);
   localStorage.setItem('visit_frequency',user.visit_frequency);

	//console.log("user.firstname1:"+user.firstname);
 if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null)
	  {  user.firstname = '';
      }
 if(user.lastname=='undefined' || user.lastname=='null' || user.lastname==null)
		{user.lastname = '';}
 if(user.emailid=='undefined' || user.emailid=='null' || user.emailid==null)
		{ user.emailid = '';}
 if(user.dob=='undefined' || user.dob=='null' || user.dob==null || user.dob=='')
		{ user.dob = '00-00-0000';}
 if(user.mobile=='undefined' || user.mobile=='null' || user.mobile==null)
		{user.mobile = '';}

 if(user.firstname == '')
	   {
	    //console.log("user.firstname2:"+user.firstname);
        localStorage.setItem("profiledone_oneawadhcenter","No");
	   }
	    var dob = user.dob.split('-');
		var dd = dob.length == 3 ? dob[0] : '';
		var mm = dob.length == 3 ? dob[1] : '';
		var yyyy = dob.length == 3 ? dob[2] : '';
		
	console.log("dob:"+user.dob);
	//$('#update_dob').val(yyyy+'-'+mm+'-'+dd);
	
	
	document.getElementById("username").innerHTML=user.firstname+' '+user.lastname;
	document.getElementById("cardname").innerHTML=user.firstname+' '+user.lastname;

	var s1 = parseInt(user.balance);
	

			if(s1 >= 0 && s1 <= 50000)
			{
				document.getElementById("cardname").innerHTML='Silver Member';
			}
			else if(s1 >= 50001 && s1 <= 150000)
			{
				document.getElementById("cardname").innerHTML='Gold Member';
			}
			else if(s1 >= 150001)
			{
				document.getElementById("cardname").innerHTML='Platinum Member';
			}

		
             

			 if(localStorage.getItem("profiledone_oneawadhcenter")=='Yes')
			 {
				 if(localStorage.getItem('firstname')!='')
				 {
					 $.mobile.changePage( "#homePage", { transition: "flip"} );
				 }
				 
			 }
			else
			{

				$('#update_firstname').val(user.firstname);
				$('#update_lastname').val(user.lastname);
				$('#update_email').val(user.emailid);
				$('#update_mob').val(user.mobile);

				document.getElementById("username").innerHTML=user.firstname+' '+user.lastname;
				document.getElementById("cardname").innerHTML=user.firstname+' '+user.lastname;

				var dob = user.dob.split('/');
				var mm = dob.length == 3 ? dob[0] : '';
				var dd = dob.length == 3 ? dob[1] : '';
				var yyyy = dob.length == 3 ? dob[2] : '';

				$('#update_dob').val(yyyy+'-'+mm+'-'+dd);

				$.mobile.changePage( "#completeprofilepage", { transition: "flip"} );
			}

  
   }else{
		  toast('Authentication failed');

		  $.mobile.changePage( "#profilepage", { transition: "none"} );
   }
	
    },
    error: function(xhr, textStatus, errorThrown) {
	user.mobile = localStorage.getItem('usernameoneawadhcenter');
	pwd = localStorage.getItem('passwordoneawadhcenter');
	uname = user.mobile;
    user.balance = localStorage.getItem('balance');
    user.firstname = localStorage.getItem('firstname');
    user.lastname = localStorage.getItem('lastname');
    user.id = localStorage.getItem('id');
    user.total = localStorage.getItem('total');
    user.validity = localStorage.getItem('validity');
    user.trans_sms = localStorage.getItem('trans_sms');
    user.mktgsms = localStorage.getItem('mktgsms');
    user.cpns = localStorage.getItem('cpns');
    user.ads = localStorage.getItem('ads');
    user.dob = localStorage.getItem('dob');
    user.emailid = localStorage.getItem('emailid');
    user.def_store = localStorage.getItem('def_store');
    user.def_city = localStorage.getItem('def_city');
	user.visit_frequency = localStorage.getItem('visit_frequency');
    /*document.getElementById("pr_name").innerHTML=user.firstname+' '+user.lastname;
	document.getElementById("pr_id").innerHTML=user.id;
	document.getElementById("pr_dob").innerHTML=user.dob;
	document.getElementById("pr_valid").innerHTML=user.validity;*/
	if(localStorage.getItem("imagedata")!=null)
	   {
		document.getElementById("cardImage").src = localStorage.getItem("imagedata");
		document.getElementById("cardImagemenu").src = localStorage.getItem("imagedata");
		
	   }
	else
	   {
		//document.getElementById("cardImage").src = 'http://graph.facebook.com/' + localStorage.getItem("cardPic") + '/picture?type=small';
		//document.getElementById("cardImagemenu").src = 'http://graph.facebook.com/' + localStorage.getItem("cardPic") + '/picture?type=small';
	   }
   
    }
  });
 }
}


$(document).on('pageinit', '#profilepage', function (event, ui) {

	    //console.log("in profilepage");
	
	$(document).on('tap', '#update_button11', function (e, ui) {

			
		e.preventDefault();
		e.stopPropagation();

		var firstname = $('#update_firstname').val();
		var lastname = $('#update_lastname').val();
		var mobile = $('#update_mobile').val();
		var email = $('#update_email').val();
		var mm = $('#update_mm').val();
		var dd = $('#update_dd').val();
		var yyyy =$('#update_yyyy').val();
		
        if(mobile=='')
	    {
			toast('Please enter Mobile No.');
		}
		else if(mobile.length<10 || mobile.length>10)
		{
			toast('Invalid mobile number');
		}
		else if(firstname=='')
		{
			toast('Please enter mandatory field');
		}
		else
		{

	/*$.ajax({
			url: SERVER+'mloyalprofileupdate.asp',
			type: 'GET',
			timeout: 30000,
		  	data: {
				FirstName: firstname,
				LastName: lastname,
				deviceid:reg_id,
				cname:'',
				Emailid: email,
				mobileno: mobile,
				dd: dd,
				mm: mm,
				yy: yyyy,
				deviceType:deviceType
				//subscribe: bc_hair
				
			},
			success: function(data, textStatus, xhr) {

				//console.log("Anoop"+url);
				
				localStorage.setItem("profiledone_oneawadhcenter","Yes");
				
				if (data.indexOf("Success")>=0)
				{
					   
					   
						toast('Your profile has been created successfully.');
						user.firstname=firstname;
						user.lastname=lastname;
						user.emailid=email;
						user.dob=dd+"-"+mm+"-"+yyyy;

				}
				else if(data=='Failed'){
					toast('Update failed.');
				}
				else{
					toast(data);
				}
				
				$.mobile.changePage( "#homePage", {transition: "flip"} );
		         
			
			},
			error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});*/

			localStorage.setItem('usernameoneawadhcenter',mobile);
			localStorage.setItem('emailid',email);
			localStorage.setItem('firstname',firstname);
			localStorage.setItem('lastname',lastname);
			localStorage.setItem('dob_dd',dd);
			localStorage.setItem('dob_mm',mm);
			localStorage.setItem('dob_yyyy',yyyy);

			sendPassnew(mobile);

	  }	
		
	});


	$(document).on('change', '#update_mobile', function (e, ui) {
		
	 var mob = $('#update_mobile').val();

	 $.ajax({
	   url: SERVER2+'get_points_json_api.asp',
	   type: 'GET',
	   timeout: 50000,
		dataType: 'json', //xml/html/script/json/jsonp
		data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o15','mobileno': mob },
		complete: function(xhr, textStatus) {
	   //called when complete
		},
		success: function(data, textStatus, xhr) {

		console.log('JSONDATA'+JSON.stringify(data));

		if(data.data.length>0)
			{
				toast('You are already registerd with us');

				$('#update_firstname').val(data.data[0].CustomerName);
				$('#update_email').val(data.data[0].Email);
				$('#update_dd').val(data.data[0].dobday);
				$('#update_mm').val(data.data[0].dobmonth);
				$('#update_yyyy').val(data.data[0].dobyear);
			}
		else
			{
			    toast('You are not registerd with us');

				$('#update_firstname').val('');
				$('#update_email').val('');
				document.getElementById("update_dd").selectedIndex = "0";
				document.getElementById("update_mm").selectedIndex = "0";
				document.getElementById("update_yyyy").selectedIndex = "0";
				/*$("#update_dd").selectmenu("refresh");
				$("#update_mm").selectmenu("refresh");
				$("#update_yyyy").selectmenu("refresh");*/

				
			}
		},
		error: function(xhr, textStatus, errorThrown) {
			//toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
  });
 });

	
});



function showcrImg()
{
	var zmImage = document.getElementById('crimg');

		zmImage.src = 'images/cr.jpg';

		$("#popupcr").popup();
		$("#popupcr").popup("open");	
	
}
function showTnc()
{
	$("#navBdr_tnc").css('display', 'block');
    $("#navBdr_tncac").css('display', 'none');

	$("#tnc1").css('display', 'block');
    $("#tnc1_ac").css('display', 'none');

	$.mobile.changePage( "#tnc", { transition: "none"} ); 
}
function showTnc_ac()
{
	$("#navBdr_tnc").css('display', 'none');
    $("#navBdr_tncac").css('display', 'block');

	$("#tnc1").css('display', 'none');
    $("#tnc1_ac").css('display', 'block');

	$.mobile.changePage( "#tnc", { transition: "none"} ); 
}

function showbackcategory()
{
	
	console.log("currentcategory:"+currentcategory);
	$.mobile.changePage('#'+currentcategory);

	 $(document).on('pageshow', '#'+currentcategory, function (e, ui) {

        
			
		e.preventDefault();
		e.stopPropagation();
		
	
});

	
}

function showOffers()
{
	$.mobile.changePage("#rewardsmain", {transition: "none"});
    

     var tabserver='https://taghash.co/oneawadhcenternew/getoffers.php';
	//alert("there"+tabserver);	
	 $.getJSON(
            tabserver , {  }, 
		     function (json) {
        console.log("SSSS" + JSON.stringify(json));
		//$.mobile.changePage("#rewardsmain", {transition: "none"});
        renderTemplate('rewardsmain', json);
        localStorage.setItem('offers', JSON.stringify(json));
    }).error(function () {
        try {
            renderTemplate('rewardsmain', JSON.parse(localStorage.getItem('offers')));
        } catch (err)
        {
            toast("Error: Could not connect to Server, make sure you are connected to Network");
        }
    });

	try{
	$( "#left-panel3" ).panel( "close" );
	}catch(err) 
	{	}
	 
}

function opennewsdetailoffer(i)
{
    //$("div[id*=newsdetailoffer]").fadeOut("fast");
    var mainpop = $('#newsdetailoffer'+i); 
    mainpop.fadeIn("fast");
	var subpop = document.getElementById('newsoffer'+i); 
    subpop.innerHTML = '<a href="javascript:closenewsdetailoffer('+i+');"  class="login_btn"><img src="images/qm.png" alt="T&C" /></a>';
    

}
function closenewsdetailoffer(i)
{
    //$("div[id*=newsdetailoffer]").fadeOut("fast");
    var mainpop = $('#newsdetailoffer'+i); 
    
    mainpop.fadeOut("fast");
	var subpop = document.getElementById('newsoffer'+i); 
   subpop.innerHTML = '<a href="javascript:opennewsdetailoffer('+i+');"  class="login_btn"><img src="images/qm.png" alt="T&C" /></a>';


}

/*function gotContacts(contacts) {

               
                    for(var i=0, len=contacts.length; i<len; i++) {
                        if(i<contacts.length){


                        
                        var phno=contacts[i].phoneNumbers[0].value.replace(new RegExp('-', 'g'), '');
                        if(phno.length==10 || phno.length==11 || phno.length==12 || phno.length==13)
                       

                        $("#wait").css("display","none"); // hide it initially

                        $.ajax({
                        
                        url:'https://halwasiya.mloyalretail.com/apis/mycontacts_json.asp?Bulkdata='+contacts[i].displayName+':'+phno,

                        type: 'GET',
                        
                        timeout: 300000,
                        dataType: "json",
                        
                        
                        success: function(data, textStatus, xhr) {
                        
                                
                        },
                        error: function(xhr, textStatus, errorThrown) {
                            }
                    });

                        }
                        
                    }
                
                }

 function errorHandler(e) {
                    console.log("errorHandler: "+e);
                }*/

$(document).on('pageshow', '#homePage', function (event, ui) {

    hideloader();
    
});


function hideloader()
{
	try{
	var pop = document.getElementById('wait');
	if(pop.style.display=='block')
		pop.style.display = 'none';
    }catch(err){}
}

function setlocation(str)
{
  
  //$("#wait").css("display", "none");

  localStorage.setItem('selectedstore',str);

  if(localStorage.getItem('selectedstore')=='ggn')
        {
            document.getElementById("ambiloc").innerHTML= 'Gurgaon';
            document.getElementById("logohp").src="images/logog.png";
            document.getElementById("logohp2").src="images/logog.png";
            document.getElementById("logoac").src="images/logog.png";
            document.getElementById("logofi").src="images/logog.png";
            document.getElementById("logofd").src="images/logog.png";
            document.getElementById("logosf").src="images/logog.png";
            document.getElementById("logosc").src="images/logog.png";
            document.getElementById("logofb").src="images/logog.png";
            document.getElementById("logop").src="images/logog.png";
            document.getElementById("logofp").src="images/logog.png";
            document.getElementById("logoup").src="images/logog.png";
            document.getElementById("logomp").src="images/logog.png";
            document.getElementById("logolp").src="images/logog.png";
            document.getElementById("logorl").src="images/logog.png";
            //document.getElementById("logorv").src="images/logog.png";
            document.getElementById("logoflp").src="images/logog.png";
            document.getElementById("logosp").src="images/logog.png";
            document.getElementById("logovc").src="images/logog.png";
            document.getElementById("logocr").src="images/logog.png";
            document.getElementById("logomlp").src="images/logog.png";
            document.getElementById("logopvr").src="images/logog.png";
            document.getElementById("logoccn").src="images/logog.png";
            document.getElementById("logoatr").src="images/logog.png";
            document.getElementById("logoatd").src="images/logog.png";
            document.getElementById("logoetd").src="images/logog.png";
            document.getElementById("logog").src="images/logog.png";
            document.getElementById("logog1").src="images/logog.png";
            document.getElementById("logoslp").src="images/logog.png";
            document.getElementById("logoccg").src="images/logog.png";
            document.getElementById("logohw").src="images/logog.png";
            document.getElementById("logomr").src="images/logog.png";
            document.getElementById("logoprv").src="images/logog.png";
            document.getElementById("logomfc").src="images/logog.png";
            document.getElementById("logofbk").src="images/logog.png";
            document.getElementById("logobup").src="images/logog.png";
            document.getElementById("logotnc").src="images/logog.png";
            document.getElementById("logopmv").src="images/logog.png";
            document.getElementById("logodir").src="images/logog.png";
            document.getElementById("logopc").src="images/logog.png";
            document.getElementById("logosr").src="images/logog.png";
        }
        else if(localStorage.getItem('selectedstore')=='vk')
        {
            document.getElementById("ambiloc").innerHTML= 'Vasant Kunj';
            document.getElementById("logohp").src="images/logovk.png";
            document.getElementById("logohp2").src="images/logovk.png";
            document.getElementById("logoac").src="images/logovk.png";
            document.getElementById("logofi").src="images/logovk.png";
            document.getElementById("logofd").src="images/logovk.png";
            document.getElementById("logosf").src="images/logovk.png";
            document.getElementById("logosc").src="images/logovk.png";
            document.getElementById("logofb").src="images/logovk.png";
            document.getElementById("logop").src="images/logovk.png";
            document.getElementById("logofp").src="images/logovk.png";
            document.getElementById("logoup").src="images/logovk.png";
            document.getElementById("logomp").src="images/logovk.png";
            document.getElementById("logolp").src="images/logovk.png";
            document.getElementById("logorl").src="images/logovk.png";
            //document.getElementById("logorv").src="images/logovk.png";
            document.getElementById("logoflp").src="images/logovk.png";
            document.getElementById("logosp").src="images/logovk.png";
            document.getElementById("logovc").src="images/logovk.png";
            document.getElementById("logocr").src="images/logovk.png";
            document.getElementById("logomlp").src="images/logovk.png";
            document.getElementById("logopvr").src="images/logovk.png";
            document.getElementById("logoccn").src="images/logovk.png";
            document.getElementById("logoatr").src="images/logovk.png";
            document.getElementById("logoatd").src="images/logovk.png";
            document.getElementById("logoetd").src="images/logovk.png";
            document.getElementById("logog").src="images/logovk.png";
            document.getElementById("logog1").src="images/logovk.png";
            document.getElementById("logoslp").src="images/logovk.png";
            document.getElementById("logoccg").src="images/logovk.png";
            document.getElementById("logohw").src="images/logovk.png";
            document.getElementById("logomr").src="images/logovk.png";
            document.getElementById("logoprv").src="images/logovk.png";
            document.getElementById("logomfc").src="images/logovk.png";
            document.getElementById("logofbk").src="images/logovk.png";
            document.getElementById("logobup").src="images/logovk.png";
            document.getElementById("logotnc").src="images/logovk.png";
            document.getElementById("logopmv").src="images/logovk.png";
            document.getElementById("logodir").src="images/logovk.png";
            document.getElementById("logopc").src="images/logovk.png";
            document.getElementById("logosr").src="images/logovk.png";
        }
  showhomePage2();
  showEntertainment();

  $.mobile.changePage( "#homepage", { transition: "slide"} );
  $('#location_pop').popup('close'); 
}



function showhomePage2()
{

  $.ajax({
   url: 'https://taghash.co/oneawadhcenter/oneawadh_homepage2.php',
   type: 'GET',
   timeout: 30000,
     data: {
            },
   success: function(data, textStatus, xhr) {

     document.getElementById("homepage2content").innerHTML=data;
   
   },
   error: function(xhr, textStatus, errorThrown) {
    
   }
  });

}
 

function showEntertainment()
{
	  resetPage();
	  
	  for (var i = 0; i < 84; i++)
			{ 
				document.getElementById("pvrlogo"+(i+1)).src= 'images/banner/blank.jpg';
				document.getElementById("pvrcaption"+(i+1)).innerHTML='';
				$('#blankpvrarea'+(i+1)).css('display','block');
			
			}

		showTabContent_json_brand('PVR_Entertainment','2');

}

function showFood()
{
	  resetPage();
	  
	  for (var i = 0; i < 84; i++)
			{ 
				document.getElementById("fblogo"+(i+1)).src= 'images/banner/blank.jpg';
				document.getElementById("fbcaption"+(i+1)).innerHTML='';
				$('#blankarea'+(i+1)).css('display','block');
			
			}

	 
	    showTabContent_json_brand('foodbox','13');

}

function showFood2()
{
	  resetPage();
	  
	  for (var i = 0; i < 84; i++)
			{ 
				document.getElementById("fdlogo"+(i+1)).src= 'images/banner/blank.jpg';
				document.getElementById("fdcaption"+(i+1)).innerHTML='';
				$('#blankfdarea'+(i+1)).css('display','block');
			
			}

	 
	    showTabContent_json_brand('finedining','13');

}

function showSpa()
{
	  resetPage();
	  
	  for (var i = 0; i < 84; i++)
			{ 
				document.getElementById("htlogo"+(i+1)).src= 'images/banner/blank.jpg';
				document.getElementById("htcaption"+(i+1)).innerHTML='';
				$('#blankhtarea'+(i+1)).css('display','block');
			
			}

	 
	    showTabContent_json_brand('HealthWellness','6');

}


function showReviews()
{
    $( "#reviews" ).popup( "open" );
}

function showServices() {

	$.mobile.changePage( "#Services", { transition: "slide"} );

}

function showConcierge()
{
	$.mobile.changePage( "#concierge", { transition: "slide"} );
}

function showCoupons(){
	if(user.mobile==null || user.mobile=='')
	{
	postregister='mloyalpg';
	//$.mobile.changePage( "#register", { transition: "none"} );
	$.mobile.changePage( "#profilepage", { transition: "none"} );
	}
	else
	{
	/*document.getElementById("barcontent").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span class="submenu_button_right" ><a href="javascript:showCoupons();"><div class="couponbx"><span class="age_4">'+user.cpns+' Coupons</span></div><img src="img/sci_coupons.png"/></span></a>';
	document.getElementById("headername").innerHTML='Coupons';
	
	 var main = document.getElementById("cardcontent");
	 main.style.display = 'none';*/
    $("#navBdr").css('display', 'none');
    $("#navBdr_about").css('display', 'none');
    $("#navBdr_coupon").css('display', 'block');
    $("#navBdr_points").css('display', 'none');

    $("#MESSAGES").css('display', 'none');
    $("#ABOUT").css('display', 'none');
    $("#COUPONS").css('display', 'block');
    $("#POINTS").css('display', 'none');

	$.mobile.changePage( "#mloyalpg", { transition: "none"} ); 
	//showTabContent('coupons', 'cpns_history_json.asp');
	showVouchers();

	}
}

function showVouchers()
{

	  $.ajax({

	   url: 'https://halwasiya.mloyalretail.com/apis/get_voucher_details_json_api.asp',
	   type: 'GET',
	   timeout: 50000,
		dataType: 'json',
		data: {'mobileno': user.mobile },
		complete: function(xhr, textStatus) {
	   //called when complete
		},
		success: function(data, textStatus, xhr) {
	  
			console.log('Data:'+JSON.stringify(data));

			var str='';

			if(data.error.indexOf('Gift Voucher Not Found.')>=0)
			{
				str += '<div style="text-align:center;margin:15px;">Vouchers Not Found</div>';
			}
			else
			{

				for(var i=0;i<data.data.length;i++)
				{
					str += '<div class="ui-grid-solo coupon active">';
					str += '<h2 class="coupon_code">'+data.data[i].GiftVoucherNo+'</h2>';
					str += '<h2 class="coupon_code">Value: '+data.data[i].GiftVoucherValue+'</h2>';
					str += '<h3 class="validity">Issued Date : '+data.data[i].Issuedon+'</h3>';
					str += '<h3 class="validity">Valid Till : '+data.data[i].GiftVoucherEndDate+'</h3>';
					str += '<h3 class="validity">Brand : '+data.data[i].Brand+'</h3>';
					str += '</div>';
				}

			}

			//str +='<div class="flrcr">';
			//str +='<div><a href="javascript:showcrImg2();"><img src="images/banner/tnc2.jpg" class="menuimg"></a></div>';
			//str +='</div><br/>';

			document.getElementById("COUPONS").innerHTML = str;
	   
		},
		error: function(xhr, textStatus, errorThrown) {
			toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });
	
}

$(document).on('pageinit', '#homePage', function (event, ui) {
        
 
      if(typeof localStorage.getItem('selectedstore')!=undefined && localStorage.getItem('selectedstore')!=null && localStorage.getItem('selectedstore')!='')
       {
            if(localStorage.getItem('selectedstore')=='ggn')
				document.getElementById("ambiloc").innerHTML= 'Gurgaon';
			else if(localStorage.getItem('selectedstore')=='vk')
				document.getElementById("ambiloc").innerHTML= 'Vasant Kunj';
	   }
	   else
	   {
		   document.getElementById("ambiloc").innerHTML= 'One Awadh Center';
	   }

		
});

function showcrImg1()
{
	var zmImage = document.getElementById('crimg');

		zmImage.src = 'images/banner/tnc1.jpg';

		$("#popupcr").popup();
		$("#popupcr").popup("open");	
	
}
function showcrImg2()
{
	var zmImage = document.getElementById('crimg');

		zmImage.src = 'images/banner/tnc2.jpg';

		$("#popupcr").popup();
		$("#popupcr").popup("open");	
	
}

function showMagazine()
{
    var ref = window.open('http://www.oneawadhcenter.com/magazine/vivi-Issue9.pdf', target="_new", 'location=yes,toolbar=yes');
    
}

function startScan()
{

 cordova.plugins.barcodeScanner.scan(
  function (result) {
   var s = "Result: " + result.text + "<br/>" +
   "Format: " + result.format + "<br/>" +
   "Cancelled: " + result.cancelled;
    toast(result.text);
    var bcode=result.text;
     
    //$('#barcodeno').val(bcode);

	checkBcode(bcode);

  }, 
  function (error) {
   alert("Scanning failed: " + error);
  }
 );

}

function checkBcode(bcode)
{
   //toast('barcode:'+bcode);
}

function shareBrand(bname,blogo)
{
	window.plugins.socialsharing.share( bname, null, blogo, 'http://www.oneawadhcenter.com');
}

function editProfile()
{
	if(user.mobile==null || user.mobile=='')
	{
		postregister='mloyalpg';
		$.mobile.changePage( "#profilepage", { transition: "none"} );
	}
	else
	{
		$.mobile.changePage( "#completeprofilepage", { transition: "none"} );
	}
}

function get_bonuspoints()
{


if(user.mobile==null || user.mobile=='')
	{
	postregister='mloyalpg';
	//$.mobile.changePage( "#register", { transition: "none"} );
	$.mobile.changePage( "#profilepage", { transition: "none"} );
	}
else
	{

	$.mobile.changePage( "#bonuspage", { transition: "none"} ); 

	$.ajax({

	   url: 'https://halwasiya.mloyalretail.com/APIs/get_bonuspoints_json_api.asp',
	   type: 'GET',
	   timeout: 50000,
		dataType: 'json',
		data: {'apiuid': 'MLOYALAPI', 'apipswd': 'Ml0yalAP!2o14', 'mobileno': user.mobile },
		complete: function(xhr, textStatus) {
	   //called when complete
		},
		success: function(data, textStatus, xhr) {
	  
			console.log('Data:'+JSON.stringify(data));

			var str='';

			if(data.error.indexOf('Bonus Points Not Found.')>=0)
			{
				str += '<div style="text-align:center;margin:15px;">Bonus Points Not Found</div>';
			}
			else
			{

				for(var i=0;i<data.data.length;i++)
				{
					str += '<div class="ui-grid-solo coupon active">';
					str += '<h2 class="coupon_code">'+data.data[i].Mobileno+'</h2>';
					str += '<h2 class="coupon_code">Bouns Points: '+data.data[i].BounsPoints+'</h2>';
					str += '<h3 class="validity">Type : '+data.data[i].Flag+'</h3>';
					str += '<h3 class="validity">Issuedon : '+data.data[i].Issuedon+'</h3>';
					str += '</div>';
				}

			}

			document.getElementById("BONUSPOINTS").innerHTML = str;
	   
		},
		error: function(xhr, textStatus, errorThrown) {
			toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });
   
	}
}

function fetchDetails(mob)
{

 $.ajax({
	   url: SERVER2+'get_points_json_api.asp',
	   type: 'GET',
	   timeout: 50000,
		dataType: 'json',
		data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o14','mobileno': mob },
		complete: function(xhr, textStatus) {
	   //called when complete
		},
		success: function(data, textStatus, xhr) {

		console.log('JSONDATA'+JSON.stringify(data));

		if(data.data.length>0)
			{

				user.id = data.data[0].Id;
				user.validity = data.data[0].validity;
				user.slabid_oneawadhcenter = data.data[0].slabid;
				user.balance = data.data[0].BalancePoints;

				if(user.validity=='undefined' || user.validity=='null' || user.validity==null)
				{
					user.validity='';
				}
				
				localStorage.setItem('id',user.id);
				localStorage.setItem('validity',user.validity);
				localStorage.setItem('slabid_oneawadhcenter',user.slabid_oneawadhcenter);

			}
		else
			{
			    //toast('Customer is not registered with us');
				
			}

		},
		error: function(xhr, textStatus, errorThrown) {
			//toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
  });

}

$(document).on('pageshow', '#homePage', function (event, ui) {
	
	//showfaveBrands();

});

function showfaveBrands()
{

		var tabserver='https://halwasiya.mloyalretail.com/APIs/brands_json.asp';
		
		$.getJSON(
        tabserver , {
			'apiuid' : 'MLOYALAPI',
			'apipswd' : 'Ml0yalAP!2o15',
			'categoryid': ''
			
             }, function (json) {

			//console.log("Data2:" + JSON.stringify(json));

			var str='';

			for (var i=0;i<json.data.length;i++ )
			{

				if(json.data[i].brandlogo=='' || json.data[i].brandlogo=='null' || json.data[i].brandlogo==null)
					json.data[i].brandlogo='images/banner/logo.jpg';
			
			    str += '<img src="'+json.data[i].brandlogo+'" class="img-resp" alt="brand"/>';

			}

			document.getElementById("love_shop_banner_new").innerHTML=str;

			$('#love_shop_banner_new').owlCarousel({
                loop: true,
                margin: 10,
                responsiveClass: true,
                nav: false,
				autoplay:true,
				dots:false,
                responsive: {
                  0: {
                    items: 2,
                  },
                  480: {
                    items: 3,
                  },
                  600: {
                    items: 4,
                  },
                  1000: {
                    items: 6,
                  }
                }
              });
		
        

		}).error(function () {
				toast('unable to connect to server');
		});

}

function checkforundefined(str)
{
    if(typeof str==undefined || str=='undefined'|| str==null || str=='null')
    {
        str='';
    }
        return str;
}