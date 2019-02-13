/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servicio;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author Marco Elio
 */
@Entity
@Table(name = "visits")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Visits.findAll", query = "SELECT v FROM Visits v")
    , @NamedQuery(name = "Visits.findById", query = "SELECT v FROM Visits v WHERE v.id = :id")
    , @NamedQuery(name = "Visits.findByVisitDate", query = "SELECT v FROM Visits v WHERE v.visitDate = :visitDate")
    , @NamedQuery(name = "Visits.findByDescription", query = "SELECT v FROM Visits v WHERE v.description = :description")})
public class Visits implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;
    @Column(name = "visit_date")
    @Temporal(TemporalType.DATE)
    private Date visitDate;
    @Size(max = 255)
    @Column(name = "description")
    private String description;
    @JoinColumn(name = "pet_id", referencedColumnName = "id")
    @ManyToOne(optional = false)
    private Pets petId;

    public Visits() {
    }

    public Visits(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getVisitDate() {
        return visitDate;
    }

    public void setVisitDate(Date visitDate) {
        this.visitDate = visitDate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Pets getPetId() {
        return petId;
    }

    public void setPetId(Pets petId) {
        this.petId = petId;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Visits)) {
            return false;
        }
        Visits other = (Visits) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "servicio.Visits[ id=" + id + " ]";
    }
    
}
