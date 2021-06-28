Within this repository includes labatory work from the course: SEG 3125: Lab 5 AND 6 -- Module 5 and 6

The viewing of the rendered sites:
* (Lab 5-6, Module 5/6 Site): <br>
https://marco-cen.github.io/SEG3125-Labs/Module5_6-HealthServiceImproved/

Site: <br> Health Service Business: Physiotherapy OR can modify type of health service (Eg: chiropractic clinic, optometrist, dentist, etc.)

<br>

# Objective:
- Keep in mind:
    - Include design principles presented in book: Design of Everyday Things by Dr. Norman.
    - Cognitive load requested by site (Human Cognition)
    - use of icons 
- Learn JavaScript framework, jQuery to create responsive site

<br> <br>

## Functional Requirements:
1) Choose serivce and a date and allow user to choose expert/professional of their choice
2) Guarantee Service Reservation: user must provide CC info (Add payment section to site)

## Human Cognition Requirements:
1) Attention (User knows where they are)
    - Menu options that bring user to right place on page (Not new pages)
2) Memory (Avoid menus too long: if 10 types of services, organize into sub-groups)
3) Perception (Review Law of Gestalt)
    - Law of Similarity: similar elements to see as a group (Colours, icons, etc.)
    - Law of Figure and Ground: Clear visible icons on various bkg colours?
    - Law of Focal Point: Users attention focused (Ex: Navbar menu to know where users are)

## Visual Communication Tools (Icons)
    - Must add icons on page for: (Visible on various bkgs)
        - Services 
        - Experts/Professionals
        - Payment
        - 2 other elements of your choice

## Design Principles (From book: Design of Everyday Things by Dr. Norman)
    - Previous Lab: Visibility & Consistency
    - Now, Feedback and Constraints

        - Visibility and Affordance: (See can do and understand)
            - Help user understand info to enter (Use tooltips: eg hover over description box)
            - Highlight of entries (Eg: on hover over, change colour of entry or emphasize entry in another way)

        - Constraints: (only acceptable choices and enter allowed info)
            - validation of inputs (Ex: Telephone or CC #)
            - Hide unavailable dates on date select (Dependant on professional selected!)

        - User Feedback:
            - Input errors (Give error msgs)
            - Any other feedback necessary to help user understand what happeneded

        - Consistency:
            - Choice of jQuery UI theme related to site overall (Uniform jQuery themes)
            - Choice of icons related to theme (Icons styling is same)




=============================================
Sources Used to Help Create:
(From Lab 5/6)
- https://github.com/RyanMatte/Lab5_Starter (Referenced TA's jQuery implementations as a foundation)
- https://codepen.io/Pratish-Dasavate/pen/MWJqGva (Menu Nav Bar)
- https://github.com/skcals/bootstrap-transparent-navbar (Menu Nav Bar)
- https://icons8.com/icons (Icons)
- https://codepen.io/casuru/pen/RPMyyp (Video Layout Inspiration)
- https://pixabay.com/videos/exercise-stretching-senior-elder-32937/ (Bkg Video)
- https://stackoverflow.com/questions/18301745/how-to-set-up-a-favicon (FavIcon)
- https://codepen.io/designify-me/pen/qrJWpG (Booking Appointment form)
- https://stackoverflow.com/questions/3340802/add-line-break-within-tooltips (Line break within data tooltip on hover description)

User Input Validation:
- https://stackoverflow.com/questions/33783637/javascript-function-input-date-bigger-than-today-date (Date Input)
- https://stackoverflow.com/questions/10459207/how-can-i-exit-from-a-javascript-function (JS knowledge)
- https://www.codegrepper.com/code-examples/javascript/javascript+get+current+hours+and+minutes (JS current H/M)
- https://stackoverflow.com/questions/32135073/how-do-i-pass-the-value-of-an-input-type-time-to-a-date-object (JS splitting string)
- https://www.javascript-coder.com/form-validation/javascript-form-validation-phone-number/ (Telephone validation)
- https://www.w3resource.com/javascript/form/email-validation.php (Email Validation)
- https://stackoverflow.com/questions/20430391/regular-expression-to-match-credit-card-expiration-date(ccExpire validation)
- https://www.techiedelight.com/remove-whitespaces-string-javascript/ (JS remove white space in string)
- https://stackoverflow.com/questions/18099653/removing-everything-except-numbers-in-a-string/18099759 (JS remove everything EXCEPT digits in string)
- https://stackoverflow.com/questions/1779013/check-if-string-contains-only-digits (JS string only contains digits)

(From Lab 4)
- https://github.com/RyanMatte/Website (Referenced TA's Starter Code: Ryan Matte as a foundation)
- https://stock.adobe.com/ca/search?k=physiotherapy+logo (Company logo design)
- https://css-tricks.com/design-considerations-text-images/ (Title page layout)
- https://codepen.io/woojin-choi/pen/QzEvQY (Meet the TEAM Layout And ABOUT US Layout)
- https://mdbootstrap.com/snippets/jquery/piotr-glejzer/156009 (Maps)
- https://mjphysio.ca/types-of-physiotherapy (Types of Physiotherapy Info)
- https://getbootstrap.com/docs/5.0/components/card/ (Service Tile Cards)
- https://getbootstrap.com/docs/4.0/components/forms/ (User Form request appointment)
- https://www.w3schools.com/tags/att_input_type_datetime-local.asp (Selection of date and time)
- https://getbootstrap.com/docs/5.0/components/alerts/ (Alerts)

Font:
- https://fonts.google.com/specimen/Questrial?preview.text=Medicalth&preview.text_type=custom#standard-styles 

Images:
- https://www.integrityphysio.com.au/blog/fixing-back-pain-with-physio/  (Home Page)
- https://www.pennmedicine.org/updates/blogs/neuroscience-blog/2017/april/physical-therapy-for-spine-pain  (Service 1)
- https://trpphysio.com.au/2017/11/14/changing-how-we-manage-lower-back-pain/?doing_wp_cron=1623635098.3579490184783935546875 (Service 2)
- https://www.pinterest.ca/pin/601934306432085521/ (Service 3)
- https://www.mountainviewhospital.org/services/physical-therapy/pelvic-floor/ (Service 4)
- https://physiomount.com/services/neurological-physiotherapy/ (Service 5)
- https://www.physioexperts.ca/services/cardiorespiratory-physiotherapy/ (Service 6)
- https://www.investnational.com.au/slider/about-us/person-stock-2/ (Expert Person 1)
- https://www.pexels.com/search/professional/ (Expert Person 2)
- https://unsplash.com/s/photos/professional (Expert Person 3)
=============================================
