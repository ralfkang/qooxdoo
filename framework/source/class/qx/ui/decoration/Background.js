/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Sebastian Werner (wpbasti)
     * Fabian Jakobs (fjakobs)

************************************************************************ */

/**
 * A very simple decorator featuring background images and colors. No
 * border is supported.
 * @deprecated{3.0}
 */
qx.Class.define("qx.ui.decoration.Background",
{
  extend : qx.ui.decoration.Decorator,
  include : [
    qx.ui.decoration.MBackgroundImage,
    qx.ui.decoration.MBackgroundColor
  ],



  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param backgroundColor {Color} Initialize with background color
   */
  construct : function(backgroundColor)
  {
    this.base(arguments);

    if (backgroundColor != null) {
      this.setBackgroundColor(backgroundColor);
    }

    if (qx.core.Environment.get("qx.debug")) {
      qx.log.Logger.deprecatedClassWarning(this.constructor,
       "Use 'qx.ui.decoration.Decorator' instead.");
    }
  },


  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    __markup : null,

    // overridden
    _getDefaultInsets : function()
    {
      return {
        top : 0,
        right : 0,
        bottom : 0,
        left : 0
      };
    },


    // overridden
    _isInitialized: function() {
      return !!this.__markup;
    },

    /*
    ---------------------------------------------------------------------------
      INTERFACE IMPLEMENTATION
    ---------------------------------------------------------------------------
    */



    // interface implementation
    resize : function(element, width, height)
    {
      var insets = this.getInsets();
      element.style.width = (width - insets.left - insets.right) + "px";
      element.style.height = (height - insets.top - insets.bottom) + "px";

      element.style.left = -insets.left + "px";
      element.style.top = -insets.top + "px";
    }
  },



  /*
   *****************************************************************************
      DESTRUCTOR
   *****************************************************************************
   */

   destruct : function() {
     this.__markup = null;
   }
});
