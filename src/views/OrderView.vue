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
            <td>Vælg alle checkable</td>
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
            <td>checkable</td>
            <td>1</td>
            <td>24/12/23 14.00</td>
            <td>16/12/23 13.54</td>
            <td>(Ikon) Peter Jenseb</td>
            <td>JA</td>
            <td>(Ikon) Allergi: ingen nødder</td>
            <td>Total: 1564,24 (Betalt) checkable</td>
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
            <td>checkable</td>
            <td>2</td>
            <td>12/12/23 17.45</td>
            <td>08/12/23 12.16</td>
            <td>(Ikon) Kirsten Pedersen</td>
            <td>Afventer</td>
            <td>(Ikon) Kan jeg få to boller istedetfor rybrød?</td>
            <td>Total: 1564,24 (Mangler Betaling) checkable</td>
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
            <td>checkable</td>
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
            <td>checkable</td>
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
            <td>checkable</td>
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
            <td>checkable</td>
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
            <td>checkable</td>
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
            <td>checkable</td>
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
          <td>checkable</td>
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
</style>

