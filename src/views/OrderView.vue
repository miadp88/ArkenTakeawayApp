<template>
  <div>
    <!-- Your header component here -->
    <div class="header">
      <!-- Left side with search bar and date picker -->
      <div class="left-side">
        <SearchBarComponent />
        <div class="date-checkables">
          <DatePickerComponent />
          <div class="DateCheckMargin"></div>
          <CheckablesComponent />
        </div>
      </div>
  
      <!-- Center with title and subtitle -->
      <div class="center-side">
        <h1 class="title">BESTILLINGER</h1>
        <h2 class="subtitle">(ADMIN)</h2>
      </div>
  
      <!-- Right side with red box -->
      <div class="right-side">
        <InfoBoxComponent />
      </div>
    </div>
    <hr>

    <!-- Your table -->
          <!-- Your table -->
          <table class="order-table">
        <tbody>
          <tr>
            <td class="checkable-cell">Vælg Alle<input type="checkbox" /></td>
            <td>ID</td>
            <td>Afleveringstid</td>
            <td>Bestillingstid</td>
            <td>Navn</td>
            <td>Bekræftet</td>
            <td>Kommentar</td>
            <td>Total Sum (Betalt?) (DDK)</td>
            <td>JuleMenu Antal kuverter</td>
            <td>Børne Menu</td>
            <td>Karrysild</td>
            <td>Marineret Sild</td>
            <td>Fiskefilet</td>
            <td>Laks</td>
            <td>Frikkedeller</td>
            <td>Hønsesalat</td>
            <td>Tarteletter</td>
            <td>Leverposteg</td>
            <td>Ribbensteg</td>
            <td>Ris a la mande</td>
            <td>Rugbrød</td>
            <td>Bolle</td>
            <td>Bekr.Mail Print (ikon)</td>
          </tr>
          <tr>
            <td class="checkable-cell"><input type="checkbox" /></td>
            <td>1</td>
            <td>24/12/23 14.00</td>
            <td>16/12/23 13.54</td>
            <td>(Ikon) Peter Jenseb</td>
            <td>JA</td>
            <td>(Ikon) Allergi: ingen nødder</td>
            <td class="checkable-cell bg-green-100">
            <div>Total: 1564,24</div>
            <div class="checkbox-container ">
              <svg class="w-12 h-12 m-auto"
                xmlns="http://www.w3.org/2000/svg" 
                height="16" 
                width="18" 
                viewBox="0 0 576 512">
                    <path
                            d="M312 24V34.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3 .5-.7 1.2-.7 2.8c0 .3 0 .5 0 .6c.2 .2 .9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9 .3c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8V232c0 13.3-10.7 24-24 24s-24-10.7-24-24V220.6c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6 .9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6 .9-1.8 .8-4.1l0-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2V24c0-13.3 10.7-24 24-24s24 10.7 24 24zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z"/></svg>
                    </div>
                </td> 
            <td>5</td>
            <td>2</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>2</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>(ikon) (ikon)</td>
          </tr>
          <tr>
            <td class="checkable-cell"><input type="checkbox" /></td>
            <td>2</td>
            <td>12/12/23 17.45</td>
            <td>08/12/23 12.16</td>
            <td>(Ikon) Kirsten Pedersen</td>
            <td>Afventer</td>
            <td>(Ikon) Kan jeg få to boller istedetfor rybrød?</td>
            <td class="checkable-cell bg-red-100">
            <div>Total: 1564,24</div>
            <div class="checkbox-container ">
              <svg class="w-12 h-12 m-auto"
                xmlns="http://www.w3.org/2000/svg" 
                height="16" 
                width="18" 
                viewBox="0 0 576 512">
                    <path
                            d="M312 24V34.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3 .5-.7 1.2-.7 2.8c0 .3 0 .5 0 .6c.2 .2 .9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9 .3c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8V232c0 13.3-10.7 24-24 24s-24-10.7-24-24V220.6c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6 .9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6 .9-1.8 .8-4.1l0-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2V24c0-13.3 10.7-24 24-24s24 10.7 24 24zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z"/></svg>
                    </div>
                </td> 

            <td>4</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>4</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>(ikon) (ikon)</td>
          </tr>
          <tr>
            <td class="checkable-cell"><input type="checkbox" /></td>
            <td>3</td>
            <td>24/12/23 12.54</td>
            <td>20/12/23 22.41</td>
            <td>(Ikon) Mie Olsen</td>
            <td>Afventer</td>
            <td>(Ikon)Allergi: ingen citrusfrugter i den ene menu</td>
            <td>Total: 2232,74 (Mangler Betaling) checkable</td>
            <td>2</td>
            <td>0</td>
            <td>4</td>
            <td>2</td>
            <td>5</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>(ikon) (ikon)</td>
          </tr>
          <tr>
            <td class="checkable-cell"><input type="checkbox" /></td>
            <td>4</td>
            <td>25/12/23 18.47</td>
            <td>17/12/23 14.11</td>
            <td>(Ikon) Grethe Johansen</td>
            <td>Afvist</td>
            <td>(Ikon) Det er min Mand der henter, hun hedder Ole Johansen</td>
            <td>Total: 764,78 (Mangler Betaling) checkable</td>
            <td>5</td>
            <td>1</td>
            <td>1</td>
            <td>2</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>(ikon) (ikon)</td>
          </tr>
          <tr>
            <td class="checkable-cell"><input type="checkbox" /></td>
            <td>5</td>
            <td>23/12/12 14.22</td>
            <td>17/12/23 23.17</td>
            <td>(Ikon) Mette Tuesen</td>
            <td>Ja</td>
            <td>(Tom Ikon)-</td>
            <td>Total: 15464,24 (Betalt) checkable</td>
            <td>6</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>(ikon) (ikon)</td>
          </tr>
          <tr>
            <td class="checkable-cell"><input type="checkbox" /></td>
            <td>6</td>
            <td>25/12/12 13.30</td>
            <td>11/12/23 09.51</td>
            <td>(Ikon) Muhamed Ali</td>
            <td>Ja</td>
            <td>(Ikon) Det an være at vi er 10 min. forsinket</td>
            <td>Total: 1453,54 (Betalt) checkable</td>
            <td>14</td>
            <td>2</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>(ikon) (ikon)</td>
          </tr>
          <tr>
            <td class="checkable-cell"><input type="checkbox" /></td>
            <td>7</td>
            <td>23/12/12 16.15</td>
            <td>25/12/23 21.01</td>
            <td>(Ikon) Anonymn</td>
            <td>Ja</td>
            <td>Tom (Ikon)-</td>
            <td>Total: 564,74 (Mangler Betaling) checkable</td>
            <td>3</td>
            <td>1</td>
            <td>2</td>
            <td>0</td>
            <td>1</td>
            <td>2</td>
            <td>5</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>(ikon) (ikon)</td>
          </tr>
          <tr>
            <td class="checkable-cell"><input type="checkbox" /></td>
            <td>8</td>
            <td>24/12/12 17.00</td>
            <td>20/12/23 17.22</td>
            <td>(Ikon) Olaf Jørgensen</td>
            <td>Afventer</td>
            <td>(Tom Ikon)-</td>
            <td>Total: 464,32 (Mangler Betaling) checkable</td>
            <td>9</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>2</td>
            <td>0</td>
            <td>0</td>
          <td>(ikon) (ikon)</td>
        </tr>
        <tr>
            <td class="checkable-cell"><input type="checkbox" /></td>
          <td>9</td>
          <td>24/12/12 16.30</td>
          <td>02/12/23 14.57</td>
          <td>(Ikon) Gitte Madsen</td>
          <td>Nej</td>
          <td>(Ikon)Veganer</td>
          <td>Total: 3514,84 (Betalt) checkable</td>
          <td>4</td>
          <td>0</td>
          <td>2</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>0</td>
          <td>(ikon) (ikon)</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import SearchBarComponent from '@/components/Layout/SearchBarComponent.vue';
import DatePickerComponent from '@/components/Layout/DatePickerComponent.vue';
import CheckablesComponent from '@/components/Layout/CheckablesComponent.vue';
import InfoBoxComponent from '@/components/Layout/InfoBoxComponent.vue';
</script>

<style scoped>

.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start; 
  padding: 10px;
  margin-top: 1vh;
}

.left-side {
  display: flex;
  flex-direction: column;
}

.date-checkables {
  display: flex;
  flex-direction: row;
}

.center-side {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  margin-top: 0; 
  margin-left: -15vw;
}

/* Styles for the horizontal line */
hr {
  border: 4px solid rgb(228, 228, 228); 
  margin-top: 20px; /* Adjust margin as needed */
}

/* Styles for the table */
.order-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px; /* Adjust margin as needed */
}

.order-table td, .order-table th {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.order-table th {
  background-color: #f2f2f2;
}

.DateCheckMargin {
  margin-right: 2vw;
}


.order-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }

  .order-table th,
  .order-table td {
    border-bottom: 4px solid rgb(228, 228, 228);
    padding: 8px;
    text-align: center;
  }



  th,
      td {
        border-bottom: 5px solid #cccccc;
      }
      .checkbox-container {
    margin-top: 1vh; /* Adjust the margin as needed */
  }



</style>

